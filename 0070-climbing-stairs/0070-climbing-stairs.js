/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const stair = {};
    
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            stair[1] = 1;
            continue;
        }

        if (i === 2) {
            stair[2] = 2;
            continue;
        }

        stair[i] = stair[i - 1] + stair[i - 2];
    }

    return stair[n];
};