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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let out = []
  function dfs(curr) {
    if(curr === null) return

    dfs(curr.left)
    out.push(curr.val)
    dfs(curr.right)
  }
  dfs(root)
  return out
};