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
var isSymmetric = function(root) {
  function dfs(curr1, curr2) {
    if(curr1 === null && curr2 === null) {
      return true
    }
    if(curr1 === null && curr2 !== null) {
      return false
    }
    if(curr1 !== null && curr2 === null) {
      return false
    }
    if(curr1.val !== curr2.val) {
      return false
    }

    return dfs(curr1.left, curr2.right) && dfs(curr1.right, curr2.left)
  }
  return dfs(root, root)
};