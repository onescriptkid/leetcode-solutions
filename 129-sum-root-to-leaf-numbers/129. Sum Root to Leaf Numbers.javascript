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
var sumNumbers = function(root) {

  // let num = 0   

  function dfs(curr, num) {
    if(curr === null) return 0

    let next = num*10 + curr.val

    if(curr.left === null && curr.right === null) {
      return next
    }

    let left = dfs(curr.left, next)
    let right = dfs(curr.right, next)

    return left + right
  }
  return dfs(root, 0)
};