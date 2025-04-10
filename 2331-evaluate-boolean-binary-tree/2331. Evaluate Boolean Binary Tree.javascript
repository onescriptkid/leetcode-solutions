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
var evaluateTree = function(root) {

  function dfs(curr) {
    if(curr === null) {
      return true
    }
    if(curr.left === null && curr.right === null) {
      if(curr.val === 1) return true
      if(curr.val === 0) return false
    }
    if(curr.val === 2) {
      return dfs(curr.left) || dfs(curr.right)
    } else {
      return dfs(curr.left) && dfs(curr.right)
    }
  }
  return dfs(root)
  // return out
};