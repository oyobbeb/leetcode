/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  /**
  Time Complexity: O(NM)
  Space Complexity: O(1)
  */

  let j = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) {
      j++;
      if (j === needle.length) {
        return i - (j - 1);
      }
      continue;
    }

    i -= j;
    j = 0;
  }

  return -1;
};