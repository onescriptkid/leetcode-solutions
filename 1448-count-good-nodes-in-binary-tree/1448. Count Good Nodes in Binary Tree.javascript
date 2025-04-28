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
    if(curr === null) {
      return
    }

    if(max <= curr.val) {
      count++
    }

    dfs(curr.left, Math.max(max, curr.val))
    dfs(curr.right, Math.max(max, curr.val))
  }   
  dfs(root,root.val)
  return count
};