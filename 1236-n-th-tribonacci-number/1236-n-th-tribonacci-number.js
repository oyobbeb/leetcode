/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const memo = [0, 1, 1];

  for (let i = 3; i < n + 1; i++) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
  }

  return memo[n];
};