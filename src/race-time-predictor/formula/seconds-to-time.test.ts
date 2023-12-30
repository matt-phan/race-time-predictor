import { describe, it, expect } from '@jest/globals';
import { secondsToTime } from './seconds-to-time';

describe('secondsToTime', () => {
    it('converts seconds to a time object', () => {
        const seconds = 12599;

        const time = secondsToTime(12599);

        expect(time).toEqual({
            hours: '3',
            minutes: '29',
            seconds: '59',
        });
    });
});
