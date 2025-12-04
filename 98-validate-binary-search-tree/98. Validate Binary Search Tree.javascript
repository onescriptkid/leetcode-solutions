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
  let prev

  function dfs(curr) {
    if(curr === null) return true

    let left = dfs(curr.left)
    // console.log('prev', prev, 'curr', curr.val)
    if(prev !== undefined && prev >= curr.val) return false
    prev = curr.val
    let right = dfs(curr.right)

    return left && right
  }
  return dfs(root)
};