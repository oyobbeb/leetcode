/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [];
  const subset = [];
  let i = 0;

  const recursion = (nums, i, subset) => {
    if (i === nums.length) {
      return result.push(subset);
    }

    recursion(nums, i + 1, [...subset, nums[i]])
    recursion(nums, i + 1, subset);
  }

  recursion(nums, i, subset);

  return result;
};