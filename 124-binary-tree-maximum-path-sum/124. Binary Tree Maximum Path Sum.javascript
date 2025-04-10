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
var maxPathSum = function(root) {
  let gmax
  function dfs(curr) {
    if(curr === null) {
      return 0
    }
    let left = dfs(curr.left)
    let right = dfs(curr.right)
    let opt1 = curr.val
    let opt2 = curr.val + right
    let opt3 = left + curr.val
    let opt4 = left + curr.val + right

    let max = Math.max(opt1, opt2, opt3, opt4)
    if(gmax === undefined) {
      gmax = max
    } else if(gmax < max) {
      gmax = max
    }

    return Math.max(opt1, opt2, opt3)
  }
  dfs(root)
  return gmax
};