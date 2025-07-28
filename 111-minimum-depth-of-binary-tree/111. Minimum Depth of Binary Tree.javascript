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
  if(root === null) return 0

  function dfs(curr, depth) {
    if(curr === null) {
      return Infinity
    }
    if(curr.left === null && curr.right === null) {
      return depth +1
    }


    let left = dfs(curr.left, depth+1)
    let right = dfs(curr.right, depth+1)
    // console.log('curr', curr.val, 'left', left, 'right', right)

    return Math.min(left, right)
  } 
  return dfs(root, 0)
};