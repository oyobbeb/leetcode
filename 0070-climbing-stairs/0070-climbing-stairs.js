/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const stair = {};
    stair[1] = 1;
    stair[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        stair[i] = stair[i - 1] + stair[i - 2];
    }

    return stair[n];
};