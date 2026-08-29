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
var countNodes = function(root) {
  function countleft(curr) {
    if(curr === null) return 0

    return 1 + countleft(curr.left)
  }    
  function countright(curr) {
    if(curr === null) return 0

    return 1 + countright(curr.right)
  }

  function dfs(curr) {
    if(curr === null) return 0
    let left = countleft(curr)
    let right = countright(curr)

    if(left === right) {
      return 2 ** left - 1
    }

    return 1 + dfs(curr.left) + dfs(curr.right)
  }
  return dfs(root)
};