/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;

  const nums = [0, 1];

  for (let i = 1; i < n; i++) {
    nums[i * 2] = nums[i];

    if (i * 2 === n) break;

    nums[(i * 2) + 1] = nums[i] + nums[i + 1];

    if ((i * 2) + 1 === n) break;
  }

  return Math.max(...nums);
};