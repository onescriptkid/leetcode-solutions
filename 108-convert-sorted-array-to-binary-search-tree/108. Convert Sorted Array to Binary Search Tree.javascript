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
  //  0   1 2 3 4 5   6 => 3 => 3
  // -10 -3 0 5 9 x
  //          m
  
  //  0   1 2 3 4     5 => 2.5 => 2
  // -10 -3 0 5 9
  //

  function dfs(nums) {
    if(nums.length === 0) {
      return null
    }

    let m = nums.length >> 1
    let node = new TreeNode(nums[m])

    // console.log('n', nums[m], 'left', nums.slice(0, m), 'right', nums.slice(m+1))
    node.left = dfs(nums.slice(0, m))
    node.right = dfs(nums.slice(m+1))

    return node

  }


  return dfs(nums)


};