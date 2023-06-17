/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const left = [];
    const right = [];
    let [start, end] = newInterval;

    for (const interval of intervals) {
        const [first, last] = interval;

        if (last < start) {
            left.push(interval);
            continue;
        }

        if (first > end) {
            right.push(interval);
            continue;
        }

        start = start > first ? first : start;
        end = end > last ? end : last;
    }

    return [...left, [start, end], ...right];
};