export const secondsToTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600).toString();
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString();
    const seconds = Math.round(totalSeconds % 60).toString();

    // remember to test cases of rounding edge cases

    return {
        hours,
        minutes,
        seconds,
    };
};
