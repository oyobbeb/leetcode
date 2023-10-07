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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  /**
  * Time Complexity: O(n)
  * Space Complexity: O(n)
  */
  // if (!root) return null;
  
  // const stack = [[root, ""]];
  // const paths = [];

  // while (stack.length) {
  //   const [node, path] = stack.pop();
  //   const newPath = path + node.val;

  //   if (!node.left && !node.right) {
  //     paths.push(newPath);
  //     continue;
  //   }

  //   if (node.left) stack.push([node.left, newPath + "->"]);
  //   if (node.right) stack.push([node.right, newPath + "->"]);
  // }

  // return paths;

  const paths = [];

  const preOrder = (node, currentPath = "") => {
    if (!node) return null;

    currentPath = currentPath ? currentPath + "->" + node.val : `${node.val}`;

    if (!node.left && !node.right) {
      paths.push(currentPath);
      return;
    }

    preOrder(node.left, currentPath);
    preOrder(node.right, currentPath);
  }

  preOrder(root);
  
  return paths;
};