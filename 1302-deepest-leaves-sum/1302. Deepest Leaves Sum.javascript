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
var deepestLeavesSum = function(root) {
  let max;

  function getDepth(curr, depth) {
    if(curr === null) return

    depth = depth + 1

    if(max === undefined) {
      max = depth
    } else if(depth > max) {
      max = depth
    }
    getDepth(curr.left, depth)
    getDepth(curr.right, depth)
  }
  getDepth(root, 0)

  let total = 0
  function dfs(curr, depth) {
    if(curr === null) return
    depth = depth + 1
    if(depth === max && curr.left === null && curr.right === null) {
      total+=curr?.val
    }
    
    dfs(curr.left, depth)
    dfs(curr.right, depth)
  }
  dfs(root, 0)
  return total
};