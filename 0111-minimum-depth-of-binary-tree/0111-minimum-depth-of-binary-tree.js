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
 * @return {number}
 */
var minDepth = function(root) {
  /**
  * Time Complexity: O(n)
  * Space Complexity: O(n)
  */
  if (!root) return 0;

  if (!root.left) {
    return minDepth(root.right) + 1;
  }

  if (!root.right) {
    return minDepth(root.left) + 1;
  }

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;

  // const queue = [[root, 1]];
    
  // while (queue.length > 0) {
  //   const [current, depth] = queue.shift();
    
  //   if (!current.left && !current.right) return depth;
    
  //   if (current.left) {
  //       queue.push([current.left, depth + 1]);
  //   }
    
  //   if (current.right) {
  //       queue.push([current.right, depth + 1]);
  //   }
  // }

  // return 1;
};