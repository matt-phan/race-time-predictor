import { describe, it, expect } from '@jest/globals';
import { predictTime } from './predict-time';

describe('predictTime', () => {
    it('predicts race time', () => {
        const params = {
            t1: { hours: '0', minutes: '22', seconds: '25' },
            d1: 5000,
            d2: 42195,
        };

        const predictedTime = predictTime(params);

        expect(predictedTime).toEqual({
            hours: '3',
            minutes: '35',
            seconds: '0',
        });
    });
});
