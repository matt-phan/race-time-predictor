import { describe, it, expect } from '@jest/globals';
import { timeToSeconds } from './time-to-seconds';

describe('timeToSeconds', () => {
    it('reduces time object to seconds', () => {
        const time = { hours: '3', minutes: '29', seconds: '59' };

        const seconds = timeToSeconds(time);

        expect(seconds).toBe(12599);
    });
});
