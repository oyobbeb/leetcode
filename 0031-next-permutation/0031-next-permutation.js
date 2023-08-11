/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  /**
  * Time Complexity: O(n)
  * Space Complexity: O(n) custom reverse is O(1)
  */
  let i = nums.length - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    
    // Find the first number which is greater than nums[i] from the right
    while (nums[j] <= nums[i]) {
      j--;
    }

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  const tmpArray = nums.splice(i + 1).reverse();
  nums.push(...tmpArray);

  // reverse(nums, i + 1);
};

function reverse(nums, start) {
  let end = nums.length - 1;

  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}