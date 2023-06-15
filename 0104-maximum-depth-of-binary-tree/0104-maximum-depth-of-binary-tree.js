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
var maxDepth = function(root) {
    if (!root) return 0;

    let depth = 1;

    const dfs = (node) => {
        if (!node) return 1;

        const left = dfs(node.left);
        const right = dfs(node.right);

        depth = Math.max(left, right);

        return Math.max(depth, Math.max(left, right)) + 1;
    }

    dfs(root);

    return depth;
};