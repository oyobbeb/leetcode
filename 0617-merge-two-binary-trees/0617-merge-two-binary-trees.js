/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  // Time Complexity: O(N) N is the number of nodes which is in the larger of two trees;
  // Space Complexity: O(log N) or O(N) is the worst case; 

  if (!root1) return root2;
  if (!root2) return root1;

  const newRoot = new TreeNode(root1.val + root2.val);
  const queue = [[root1, root2, newRoot]];

  while (queue.length) {
    const [node1, node2, newNode] = queue.shift();

    if (node1.left || node2.left) {
      const left1 = node1.left ? node1.left : new TreeNode(0);
      const left2 = node2.left ? node2.left : new TreeNode(0);
      newNode.left = new TreeNode(left1.val + left2.val);
  
      queue.push([left1, left2, newNode.left]);
    }

    if (node1.right || node2.right) {
      const right1 = node1.right ? node1.right : new TreeNode(0);
      const right2 = node2.right ? node2.right : new TreeNode(0);
      newNode.right = new TreeNode(right1.val + right2.val);
  
      queue.push([right1, right2, newNode.right]);
    }
  }

  return newRoot;
};