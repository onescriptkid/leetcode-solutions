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
var minDepth = function(root) {

  let min
  function dfs(curr, depth) {
    if(curr === null) {
      return
    }
    depth = depth + 1
    if (curr.left === null && curr.right === null) {
      if (min === undefined) {
        min = depth
      } else if (depth < min) {
        min = depth
      }
    }
    
    dfs(curr.left, depth)
    dfs(curr.right, depth)
  }
  dfs(root, 0)
  return min || 0
};