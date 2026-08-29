/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  function dfs(curr) {
    if(curr === null) return null
    if(curr === p) return curr
    if(curr === q) return curr

    let left = dfs(curr.left)
    let right = dfs(curr.right)
    if(left && right) {
      return curr
    }

    return left || right
  }
  return dfs(root)
};