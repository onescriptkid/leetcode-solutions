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
var goodNodes = function(root) {


  let count = 0

  function dfs(curr, max) {
    if(curr === null) return

    if(curr.val >= max) count++

    let nmax = Math.max(max, curr.val)
    dfs(curr.left, nmax)
    dfs(curr.right, nmax)
  }   
  dfs(root, -Infinity)

  return count
};