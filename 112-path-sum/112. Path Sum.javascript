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

  let flag = false
  function dfs(curr, sum) {
    if (curr === null) {
      return false
    }

    let nextsum = sum+ curr.val

    if(curr.left === null && curr.right === null) {
      if(nextsum === targetSum) {
        return true
        // flag = true
      }
    }
    return dfs(curr.left, nextsum) || dfs(curr.right, nextsum)
  } 
  return dfs(root, 0)
  // return flag
};