/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // Time Complexity: O(N);
  // Space Complexity: O(1);

  if (nums.length === 0) return 0;

  let removeIndex = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[removeIndex]) {
        removeIndex++;
        nums[removeIndex] = nums[j];
    }
  }

  return removeIndex + 1;
};
