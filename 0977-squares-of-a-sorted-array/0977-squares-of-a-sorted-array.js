/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  /**
  * Time Complexity: O(N log N)
  * Space Complexity: O(N)
  */

  const result = [];

  for (const num of nums) {
    const square = Math.abs(num * num);
    result.push(square);
  }

  result.sort((a, b) => a - b);

  return result;
};