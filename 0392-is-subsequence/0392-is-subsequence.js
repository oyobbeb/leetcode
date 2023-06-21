/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let subsequenceValue = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[subsequenceValue] === t[i]) {
      subsequenceValue++;
    }
  }

  return subsequenceValue === s.length;
};