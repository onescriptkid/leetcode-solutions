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
  // 0   1  2 3 4 => 
  //        x
  
  // 0   1  2 3 4 5=> 
  //        x

  // -10 -3 0 5 9
  //  l         r

  function dfs(arr) {
    if(arr.length === 0) return null
    if(arr.length == 1) {
      return new TreeNode(arr[0])
    }
    let m = arr.length >> 1

    let node = new TreeNode(arr[m])

    let left = arr.slice(0, m)
    node.left = dfs(left)

    let right = arr.slice(m+1, arr.length)
    node.right = dfs(right)


    return node
  }
  return dfs(nums)
  // return dfs(0, nums.length - 1)

};