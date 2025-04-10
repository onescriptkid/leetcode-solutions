/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

  function dfs(currp, currq) {
    if(currp === null && currq === null) {
      return true
    }
    if(currp === null && currq !== null) {
      return false
    }
    if(currp !== null && currq === null) {
      return false
    }
    if(currp.val !== currq.val) {
      return false
    }
    return dfs(currp.left, currq.left) && dfs(currp.right, currq.right)
  }   
  return dfs(p, q)
};