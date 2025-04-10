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
 * @return {boolean}
 */
var findTarget = function(root, k) {
  // {7: "lrlrr", }
  let obj = {}

  function dfs(curr, path) {
    if(curr === null) return
    obj[k - curr.val] = path

    dfs(curr.left, path+'l')
    dfs(curr.right, path+'r')
  }
  dfs(root, '')
  // console.log(obj)


  let twoSum = false
  function dfs2(curr, path) {
    if(curr === null) return
    // console.log(curr, path)
    if(obj[curr.val] !== undefined && obj[curr.val] !== path) {
      twoSum = true
      return
    }
    dfs2(curr.left, path+'l')
    dfs2(curr.right, path+'r')
  }
  dfs2(root, '')


  return twoSum
};