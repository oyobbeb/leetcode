/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
/**
* Time Complexity: O(N + N)
* Space Complexity: O(1)
*/

  s = s.trim();

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      count = 0;
      continue;
    }

    count++;
  }

  return count;
};