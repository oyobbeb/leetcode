/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const memo = new Array(cost.length + 1).fill(0);

  for (let i = 3; i < cost.length + 3; i++) {
    memo[i] = cost[i - 3] + Math.min(memo[i - 1], memo[i - 2]);
  }

  return Math.min(memo[memo.length - 1], memo[memo.length - 2]);
};