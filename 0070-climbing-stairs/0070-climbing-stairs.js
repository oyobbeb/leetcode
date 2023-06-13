/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 3) return n;

    let first = 1;
    let second = 2;

    for (let i = 2; i < n; i++) {
        [first, second] = [second, first + second];
    }

    return second;
};