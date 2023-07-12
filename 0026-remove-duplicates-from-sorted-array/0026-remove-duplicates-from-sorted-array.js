/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // Time Complexity: O(N^2);
  // Space Complexity: O(1);

  // if (nums.length === 0) return 0;

  // for(let i = 0; i < nums.length; i++) {
  //   if (nums[i] === nums[i + 1]) {
  //     nums.splice(i, 1);
  //     i--;
  //   }
  // }

  // return nums.length;


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
