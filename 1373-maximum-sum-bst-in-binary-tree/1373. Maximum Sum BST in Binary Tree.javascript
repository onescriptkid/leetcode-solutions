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
var maxSumBST = function(root) {
  let gmax = 0   
  function dfs(curr) {
    if(curr === null) return { isbst: true, min: Infinity, max: -Infinity, sum: 0}

    let left = dfs(curr.left)
    let right = dfs(curr.right)

    if(left.isbst && right.isbst && left.max < curr.val && curr.val < right.min) {
      let sum = left.sum + curr.val + right.sum
      let min = Math.min(left.min, curr.val)
      let max = Math.max(right.max, curr.val)

      gmax = Math.max(gmax, sum)

      return {isbst: true, min, max, sum}
    }

    return {isbst: false}
  }
  dfs(root)
  return gmax
};