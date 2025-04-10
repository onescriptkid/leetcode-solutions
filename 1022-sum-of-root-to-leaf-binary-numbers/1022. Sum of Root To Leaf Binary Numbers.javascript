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
var sumRootToLeaf = function(root) {
  let sum = 0
  function dfs(curr, i, val) {
    if(curr === null) return 0
    // 1     1
    let next = ((val << 1) | curr.val)

    if(curr.left === null && curr.right === null) {
      sum+=next
      return next
    }
    return dfs(curr.left, i+1, next) + dfs(curr.right, i+1, next)
  }
  dfs(root, 0, 0)
  return sum
};