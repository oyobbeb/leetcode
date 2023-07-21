/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
/**
* Time Complexity: O(N)
* Space Complexity: O(1)
*/

  if (digits.length === 0) return [];

  const checkNextAdd = (array, index) => {
    if (array[index] === undefined) {
      return array.unshift(1);
    }

    if (array[index] === 9) {
      array[index] = 0;
      return checkNextAdd(array, index - 1);
    }

    array[index] += 1;
  }

  checkNextAdd(digits, digits.length - 1);

  return digits;
};