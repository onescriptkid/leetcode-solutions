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
 * @return {number[]}
 */
var findMode = function(root) {

  let out = []
  let prev
  let count = 0
  let max = 0

  function dfs(curr) {
    if(curr === null) {
      return
    }

    dfs(curr.left)
    if(prev === curr.val) {
      count++
    } else {
      count = 0
    }
    // console.log('prev', prev, 'curr', curr?.val, 'max', max, 'count', count)

    if(count > max) {
      out = [curr.val]
      max = count
    } else if(count === max) {
      out.push(curr.val)
    }
    prev = curr.val
    dfs(curr.right)
  }
  dfs(root)
  return out
};