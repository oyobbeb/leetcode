/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // time complexity: O(n);
  // space complexity: O(n);

  const map = new Map();
  let startString = 0;
  let maxStringLength = 0;

  for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
          startString = Math.max(map.get(s[i]), startString);
      }
  
      maxStringLength = Math.max(maxStringLength, i - startString + 1);
      map.set(s[i], i + 1);
  }

  return maxStringLength;
};