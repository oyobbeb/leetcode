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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (root === null) return false;

  targetSum -= root.val;

  if (root.left === null && root.right === null) {
    return targetSum === 0;
  }

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);

  // const stack = [];
  // let current;

  // root.val = targetSum - root.val;

  // stack.push(root);

  // while (stack.length) {
  //   current = stack.pop();

  //   if (current.left === current.right && !current.val) return true;

  //   if (current.left) {
  //     current.left.val = current.val - current.left.val;
  //     stack.push(current.left);
  //   }

  //   if (current.right) {
  //     current.right.val = current.val - current.right.val;
  //     stack.push(current.right);
  //   }
  // }

  // return false;

  // const stack = [[root, targetSum - root.val]];
  
  // while (stack.length) {
  //     const [current, sum] = stack.pop();
      
  //     if (!current.left && !current.right && sum === 0) return true;
      
  //     if (current.right) {
  //         stack.push([current.right, sum - current.right.val]);
  //     }
      
  //     if (current.left) {
  //         stack.push([current.left, sum - current.left.val]);
  //     }
  // }
  
  // return false;

  // let output = false;
  // const traverse = (root, sum = 0) => {
  //   if (!root.left && !root.right) {
	// 		if (targetSum === sum + root.val) output = true;
	// 	}

  //   if (root.left) traverse(root.left, sum + root.val);
	// 	if (root.right) traverse(root.right, sum + root.val);
  // }

  // traverse(root);

  // return output;
};