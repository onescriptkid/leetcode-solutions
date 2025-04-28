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
var minDepth = function(root) {

  let min
  function dfs(curr, d) {
    if(curr === null) {
      return
    }
    if(curr.left == null && curr.right === null) {
      if(min === undefined) {
        min = d
      } else if(d < min) {
        min = d
      }
    }
    dfs(curr.left, d+1)
    dfs(curr.right, d+1)
  }
  dfs(root, 1)
  if(min === undefined) return 0
  return min

};