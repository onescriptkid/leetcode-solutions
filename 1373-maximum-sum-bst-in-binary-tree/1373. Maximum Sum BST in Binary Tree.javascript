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
    if(curr === null) return {isbst: true, min: Infinity, max: -Infinity, sum: 0}

    let left = dfs(curr.left)
    let right = dfs(curr.right)

    if(left.isbst && right.isbst) {
      let nextsum = curr.val + left.sum + right.sum
      if(left.max < curr.val && curr.val < right.min) {
        let nextmax = Math.max(curr.val, right.max)
        let nextmin = Math.min(curr.val, left.min)
        gmax = Math.max(gmax, nextsum)
        return {isbst: true, min: nextmin, max: nextmax, sum: nextsum}

      }

    }

    return {isbst: false, min: -Infinity, max: Infinity, sum: 0}

  }   
  dfs(root)
  return gmax
};