/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

  // -10 -3 0 9 5
  //   0  1 2 3 4

  function dfs(arr) {
    if(arr.length === 0) return null

    let m = arr.length >> 1
    let node  = new TreeNode(arr[m])
    node.left = dfs(arr.slice(0, m))
    node.right = dfs(arr.slice(m+1))
    return node

  }
  return dfs(nums)



};