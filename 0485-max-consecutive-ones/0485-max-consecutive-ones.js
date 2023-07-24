/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  /**
  * Time Complexity: O(N)
  * Space Complexity: O(1)
  */

  let prevConsecutive = 0;
  let maxConsecutive = 0;

  for (const num of nums) {
    if (num === 0) {
      prevConsecutive = 0;
      continue;
    }

    prevConsecutive += num;
    maxConsecutive = Math.max(prevConsecutive, maxConsecutive);
  }

  return maxConsecutive;
};