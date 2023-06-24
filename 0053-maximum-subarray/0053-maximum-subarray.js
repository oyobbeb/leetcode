/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(array) {
  // time complexyity: O(n)
  // space complexity: O(1)

  for (let i = 1; i < array.length; i++) {
    array[i] = Math.max(array[i], array[i] + array[i - 1]);
  }

  return Math.max(...array);
};