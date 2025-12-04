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

  let kth
  let i = 0
  function dfs(curr) {
    if(curr === null) return

    dfs(curr.left)
    i++
    if(k === i) {
      kth = curr.val
      return
    }
    dfs(curr.right)
  }
  dfs(root)

  return kth

};