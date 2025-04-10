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
var diameterOfBinaryTree = function(root) {
  let max;

  function dfs(curr) {
    if(curr === null) {
      return 0 
    }
    let left = 0
    if(curr.left !== null) {
      left = 1 + dfs(curr.left)
    }
    let right = 0
    if(curr.right !== null) {
      right =  1 + dfs(curr.right)
    }

    let dia = left + right
    if(max === undefined) {
      max = dia
    } else if(dia > max) {
      max = dia 
    }

    return Math.max(left, right)
  } 
  dfs(root)
  return max
};