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

  function dfs(curr, min, max) {
    // console.log('curr', curr?.val, 'min', min, 'max', max)
    if(curr === null) {
      return true
    }

    if(curr.val <= min || curr.val >= max) {
      return false
    }

    let left =  dfs(curr.left, min, curr.val)
    let right = dfs(curr.right, curr.val, max)


    return left && right

  }
  return dfs(root, -Infinity, Infinity)

};