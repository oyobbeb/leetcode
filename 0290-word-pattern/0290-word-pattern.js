/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const temp = new Map();
  const words = s.split(' ');

  if (words.length !== pattern.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    const key = pattern[i];

    if (!temp.has(key)) {
      if (Array.from(temp.values()).includes(words[i])) {
        return false;
      }

      temp.set(key, words[i]);
      continue;
    }

    if (temp.get(key) !== words[i]) {
      return false;
    }
  }

  return true;
};