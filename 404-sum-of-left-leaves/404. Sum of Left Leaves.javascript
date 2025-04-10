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
var sumOfLeftLeaves = function(root) {
  let out = 0
  function dfs(curr, dir) {
    if(curr === null) return

    if(curr.left === null && curr.right === null && dir === 'left') {
      out+=curr.val
    }
    dfs(curr.left, 'left')
    dfs(curr.right, 'right')
  }
  dfs(root, '')
  return out
};