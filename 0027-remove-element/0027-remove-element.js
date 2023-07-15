/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  /**
  Time Complexity:  O(N log N); 
  Space Complexity: O(1);

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = Infinity;
      count++;
    }
  }

  nums.sort((a, b) => a - b);

  return nums.length - count;
  */

  // Time Complexity: O(N);
  // Space Complexity: O(1);

  let removeIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[removeIndex] = nums[i];
      removeIndex++;
    }
  }

  return removeIndex;
};