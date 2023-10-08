/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  /**
  * Time Complexity: O(m x n log n) m is strs.length; n is str's average length
  * Space Complexity: O(mn)
  */
  const current = new Map();

  for (const str of strs) {
    const sortedString = [...str].sort().join("");

    if (current.has(sortedString)) {
      current.get(sortedString).push(str);
      continue;
    }

    current.set(sortedString, [str]);
  }

  return [...current.values()];
};