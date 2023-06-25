/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // time complexity: O(n);
  // space complexity: O(n);

  const map = new Map();
  let repeatValueIndex = 0;
  let maxWindow = 0;

  for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
          repeatValueIndex = Math.max(map.get(s[i]), repeatValueIndex);
      }
  
      maxWindow = Math.max(maxWindow, i - repeatValueIndex + 1);
      map.set(s[i], i + 1);
  }

  return maxWindow;
};