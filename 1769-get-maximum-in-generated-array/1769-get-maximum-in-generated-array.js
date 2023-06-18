/**
 * @param {number} n
 * @return {number}
 */

var getMaximumGenerated = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  const nums = [0, 1];

  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      nums[i] = nums[i / 2];
      continue;
    }

    nums[i] = nums[(i - 1) / 2] + nums[((i - 1) / 2) + 1];
  }

  return Math.max(...nums);
};