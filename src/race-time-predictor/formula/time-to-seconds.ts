import * as R from 'ramda';
import { Time } from '../types';

const HOUR = 60 * 60;
const MINUTE = 60;

const toInt = R.map(parseInt);

const toSeconds = R.reduce((accSeconds, [unitOfTime, value]) => {
    switch (unitOfTime) {
        case 'hours':
            return accSeconds + HOUR * value;
        case 'minutes':
            return accSeconds + MINUTE * value;
        default:
            return accSeconds + value;
    }
}, 0);

export const timeToSeconds = (time: Time) =>
    R.pipe(toInt, R.toPairs, toSeconds)(time);
