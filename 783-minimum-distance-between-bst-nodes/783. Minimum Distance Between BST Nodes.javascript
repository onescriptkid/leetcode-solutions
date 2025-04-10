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
var minDiffInBST = function(root) {

  // 0 1 
  let out = []
  function dfs(curr) {
    if(curr === null) return
    dfs(curr.left)
    out.push(curr.val)
    dfs(curr.right)
  }
  dfs(root)
  let min = undefined
  for(let i = 0 ; i < out.length - 1; i++) {
    let curr = out[i]
    let next = out[i+1]
    let diff = Math.abs(curr - next)
    if(min === undefined) {
      min = diff
    } else if(diff < min) {
      min = diff
    }
  }
  return min
};