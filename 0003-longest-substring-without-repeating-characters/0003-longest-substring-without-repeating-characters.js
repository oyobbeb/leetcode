/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // time complexity: O(n);
  // space complexity: O(n);

  const substring = {};
  let repeatValueIndex = 0;
  let maxWindow = 0;

  for (let i = 0; i < s.length; i++) {
      if (substring[s[i]]) {
          repeatValueIndex = Math.max(substring[s[i]], repeatValueIndex);
      }
  
      maxWindow = Math.max(maxWindow, i - repeatValueIndex + 1);
      substring[s[i]] = i + 1;
  }

  return maxWindow;
};