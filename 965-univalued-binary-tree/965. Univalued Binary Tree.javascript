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
var isUnivalTree = function(root) {
  let uni = true
  let val;
  function dfs(curr) {
    if(curr === null) return true

    if(val === undefined) {
      val = curr.val
    } else if(val !== curr.val) {
      return false 
    }

    return dfs(curr.left) && dfs(curr.right)
  }
  return dfs(root)
};