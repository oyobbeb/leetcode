/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  // time complexity: O(n);
  // space complexity: O(n);
  // BFS

  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length !== 0) {
    const currentLevel = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentValue = queue.shift();
      
      if (currentValue.left) {
        queue.push(currentValue.left);
      }

      if (currentValue.right) {
        queue.push(currentValue.right);
      }

      currentLevel.push(currentValue.val);
    }

    result.push(currentLevel);
  }

  return result;
};