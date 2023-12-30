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

/*
400m
1/2 mile
1k
1 mile
2 mile
5k
10k
15k
10 mile
20k
half marathon
30k
marathon
*/

/*
Inputs are:
1 - Best effort distance (number)
2 - Best effort time (Time)
3 - Prediction distance

Output is:
1 - Predicted time (Time)
 */
