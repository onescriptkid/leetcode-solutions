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
var preorderTraversal = function(root) {

  let out = []
  function dfs(curr) {
    if(curr === null) return
    out.push(curr.val)
    dfs(curr.left)
    dfs(curr.right)
  }
  dfs(root)
  return out

};