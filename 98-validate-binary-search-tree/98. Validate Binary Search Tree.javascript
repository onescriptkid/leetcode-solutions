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
var isValidBST = function(root) {

  function dfs(curr, min, max) {
    // console.log(curr?.val, min, max)
    if(curr === null) return true

    if(curr.val <= min || curr.val >= max) return false


    let nextmin
    if(min === undefined) {
      nextmin = curr.val
    } else {
      nextmin = Math.max(min, curr.val)
    }
    let nextmax
    if(max === undefined) {
      nextmax = curr.val
    } else {
      nextmax = Math.min(max, curr.val)
    }

    return dfs(curr.left, min, nextmax) && dfs(curr.right, nextmin, max)

  }
  return dfs(root)

};