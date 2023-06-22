/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const memo = new Array(cost.length + 3).fill(0);

  for (let i = cost.length - 1; i >= 0; i--) {
    memo[i] = cost[i] + Math.min(memo[i + 1], memo[i + 2]);
  }

  return Math.min(memo[0], memo[1]);
};