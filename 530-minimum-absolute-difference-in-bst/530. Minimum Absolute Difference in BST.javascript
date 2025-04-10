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
var getMinimumDifference = function(root) {
  let arr = []

  function dfs(curr) {
    if(curr === null) {
      return
    }
    dfs(curr.left)
    arr.push(curr.val)
    dfs(curr.right)
  }
  dfs(root)

  let min;
  let prev;
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if(prev !== undefined) {
      let diff = num - prev
      if(min === undefined) {
        min = diff  
      } else if(diff < min) {
        min = diff
      }
    }
    prev = num
  }
  return min
};