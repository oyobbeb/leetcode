/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  /**
  Time Complexity: O(N);
  Space Complexity: O(1);


  if (nums[0] >= target) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }

    if (nums[i - 1] < target && nums[i] > target) {
      return i;
    }
  }

  return nums.length;
  */

  /**
  Time Complexity: O(log N);
  Space Complexity: O(1);
   */

  let start = 0;
  let last = nums.length - 1;

  while (start <= last) {
    const mid = Math.floor((start + last) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      start = mid + 1;
      continue;
    }

    last = mid - 1;
  }

  return start;
};