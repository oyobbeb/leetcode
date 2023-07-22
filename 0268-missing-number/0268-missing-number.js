/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  /**
  * Time Complexity: O(N log N)
  * Space Complexity: O(1)


  nums.sort((a, b) => a - b);

  if (nums[0] !== 0) {
      return 0;
  }

  for (let i = 0; i < Math.max(...nums); i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      return nums[i] + 1;
    }
  }

  return nums.length;
  */

  /**
  * Time Complexity: 0(N)
  * Space Complexity: O(1)
  */

  const numsLength = nums.length;
  let expectedSum = (numsLength * (numsLength + 1)) / 2;

  for (const num of nums) {
    expectedSum -= num;
  }
  
  return expectedSum;
};