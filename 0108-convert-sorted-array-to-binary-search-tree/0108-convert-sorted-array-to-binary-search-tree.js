/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  /**
  * Time Complexity: O(N log N)
  * Space Complexity: O(N)
  */

  if (!nums.length) return null;

  const rootPoint = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[rootPoint]);

  root.left = sortedArrayToBST(nums.slice(0, rootPoint));
  root.right = sortedArrayToBST(nums.slice(rootPoint + 1));

  return root;
};