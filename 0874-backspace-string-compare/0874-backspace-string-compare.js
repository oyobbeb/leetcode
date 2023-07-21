/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  /**
  * Time Complexity: O(N + M)
  * Space Complexity: O(N + M)
  */

  return removedBackspaceFromString(s) === removedBackspaceFromString(t);
};

function removedBackspaceFromString(string) {
  const stack = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "#") {
      stack.pop();
      continue;
    }

    stack.push(string[i]);
  }

  return stack.join('');
}