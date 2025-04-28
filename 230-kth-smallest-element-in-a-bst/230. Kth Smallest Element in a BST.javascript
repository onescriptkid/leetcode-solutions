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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

  let i = 0
  let kth = -1
  function dfs(curr) {
    if(curr === null) {
      return
    }
    // console.log('curr', curr.val, 'i', i)
    // if(i === k) {
    //   kth = curr.val
    // }
    dfs(curr.left)
    i++
    if(i === k) {
      kth = curr.val
    }
    dfs(curr.right)
  }
  dfs(root)
  return kth
};