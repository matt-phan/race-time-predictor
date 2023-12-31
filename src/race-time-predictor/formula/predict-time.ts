import { Time } from '../types';
import * as R from 'ramda';
import { timeToSeconds } from './time-to-seconds';
import { secondsToTime } from './seconds-to-time';

type predictTimeParams = {
    t1: Time;
    d1: number;
    d2: number;
};

const toSeconds = R.evolve({ t1: timeToSeconds });

const predict = (t1: number, d1: number, d2: number) => t1 * (d2 / d1) ** 1.06;

export const predictTime = (params: predictTimeParams): Time => {
    return R.pipe(
        toSeconds,
        ({ t1, d1, d2 }) => predict(t1, d1 as number, d2 as number),
        secondsToTime
    )(params);
};
