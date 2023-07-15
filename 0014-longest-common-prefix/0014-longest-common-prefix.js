/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // Time Complexity: O(MN)
  // Space Complexity: O(1)
  //

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
};