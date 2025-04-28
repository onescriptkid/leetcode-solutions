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
 * @return {boolean}
 */
var isBalanced = function(root) {

  function dfs(curr) {
    if(curr === null) return 0

    let left = dfs(curr.left)
    let right = dfs(curr.right)

    if(left === -1 || right === -1) {
      return -1
    }

    let diff = Math.abs(left - right)
    if(diff > 1) {
      return -1
    }

    return Math.max(left, right) + 1
  }
  let out = dfs(root)
  if(out === -1) {
    return false
  }
  return true
};