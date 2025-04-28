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

  let prev
  let count = 0
  let max
  let modes = []
  // 1 2 2 3 3 4 5 5 5 6 6

  function dfs(curr) {
    if(curr === null) {
      return
    }

    dfs(curr.left)
    // console.log('curr', curr.val, '-', 'count', count, 'prev', prev)
    if(prev === undefined) {
      count = 1
    } else if(prev === curr.val) {
      count++
    } else if(prev !== curr.val) {
      count = 1
    }
    if(max === undefined) {
      max = count
      modes = [curr.val]
    } else if(count > max) {
      max = count
      modes = [curr.val]
    } else if(count === max) {
      max = count
      modes.push(curr.val)
    }
    prev = curr.val
    dfs(curr.right)
  }
  dfs(root)
  return modes
  //   
  //  /    
};