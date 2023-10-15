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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  if (!root) return [];

  // const result = [];
  // const stack = [[root, [root.val], targetSum - root.val]];
  
  // while (stack.length) {
  //   const [node, path, sum] = stack.pop();
    
  //   if (!node.left && !node.right && !sum) {
  //     result.push(path);
  //     continue;
  //   }
    
  //   if (node.right) {
  //     stack.push([node.right, [...path, node.right.val], sum - node.right.val]);
  //   }
    
  //   if (node.left) {
  //     stack.push([node.left, [...path, node.left.val], sum - node.left.val]);
  //   }
  // }
  
  // return result;
  /**
  * Time Complexity: O(n)
  * Space Complexity: O(n)
  */

  const result = [];

  const helper = (node, path, sum) => {
    if (!node) return;

    path.push(node.val);
    sum -= node.val;

    if (!node.left && !node.right && !sum) {
      result.push([...path]);
    }

    helper(node.left, path, sum);
    helper(node.right, path, sum);

    path.pop();
  }

  helper(root, [], targetSum);

  return result;
};