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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

  function dfs(curr, sum) {
    if(curr === null) return false

    if(curr.left === null && curr.right === null) {
      return curr.val + sum === targetSum
    }

    return dfs(curr.left, curr.val +sum) || dfs(curr.right, curr.val+sum)
  }
  return dfs(root, 0)

};