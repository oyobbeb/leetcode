/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  // time complexity: O(n);
  // space complexity: O(n);
  // DFS + Hash Table

  if (!node) return null;

  const mappedNodes = new Map();
  const cloneNode = (node) => {
    if (!mappedNodes.has(node.val)) {
      mappedNodes.set(node.val, new Node(node.val));
      mappedNodes.get(node.val).neighbors = node.neighbors.map(neighbor => cloneNode(neighbor));
    }

    return mappedNodes.get(node.val);
  }

  return cloneNode(node);
};