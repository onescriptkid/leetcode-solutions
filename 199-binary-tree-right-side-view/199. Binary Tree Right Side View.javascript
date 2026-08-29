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
var rightSideView = function(root) {
  let out = []
  function dfs(curr, i) {
    if(curr === null) return

    if(out[i] === undefined) {
      out[i] = curr.val
    }

    dfs(curr.right, i+1)
    dfs(curr.left, i+1)
  }   
  dfs(root, 0)
  return out
};