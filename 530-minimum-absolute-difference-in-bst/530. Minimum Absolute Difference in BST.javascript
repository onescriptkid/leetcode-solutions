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
var getMinimumDifference = function(root) {
  let prev
  let min
  function dfs(curr) {
    if(curr == null) return

    dfs(curr.left)
    if(prev !== undefined) {
      let diff = curr.val - prev
      if(min === undefined || diff < min) {
        min = diff
      } 
    }
    prev = curr.val
    dfs(curr.right)
  }

  dfs(root)
  return min
};