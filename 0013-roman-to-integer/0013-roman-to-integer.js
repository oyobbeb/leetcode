/**
 * @param {string} s
 * @return {number}
 */
const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

var romanToInt = function(s) {
/**
* Time Complexity: O(N)
* Space Complexity: O(1)
*/

  let total = 0;

  for (let i = 0;  i < s.length; i++) {
    const currentValue = map[s[i]];
    const nextValue = map[s[i + 1]];

    if (currentValue < nextValue) {
      total += nextValue - currentValue;
      i++;
      continue;
    }

    total += currentValue;
  }

  return total;
};