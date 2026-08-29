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
var widthOfBinaryTree = function(root) {
  let mins = {}
  let max = 0

  function dfs(curr, index, level) {
    if(curr === null) return

    if(mins[level] === undefined || index < mins[level]) {
      mins[level] = index
    }
    let diff = index - mins[level]
    max = Math.max(max, 1+diff)

    dfs(curr.left, 2*diff, level+1)
    dfs(curr.right, 2*diff+1, level+1)
  }
  dfs(root, 0, 0)
  return max
};