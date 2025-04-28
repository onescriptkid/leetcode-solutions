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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  //           10
  //      /          \
  //    5             15
  //   / \              \
  //  3   7              18

  let sum = 0
  function dfs(curr) {
    if(curr === null) return

    if(curr.val >= low && curr.val <= high) {
      sum+=curr.val
    }
    if(curr.val >= low) dfs(curr.left)
    if(curr.val <= high) dfs(curr.right)
  }
  dfs(root)
  return sum

};