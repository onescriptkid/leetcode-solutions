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
var sumNumbers = function(root) {

  function dfs(curr, val) {
    if(curr === null) return 0

    let nextval = val*10 + curr.val

    if(curr.left === null && curr.right === null) {
      return nextval
    }

    return dfs(curr.left, nextval) + dfs(curr.right, nextval)
  }   
  return dfs(root, 0)
};