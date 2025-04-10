/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  let arr1 = []
  let arr2 = []

  function dfs(curr, arr) {
    if(curr === null) return
    dfs(curr.left, arr)
    if(curr.left === null && curr.right === null) {
      arr.push(curr.val)
    }
    dfs(curr.right, arr)
  }
  dfs(root1, arr1)
  dfs(root2, arr2)
  if(arr1.length !== arr2.length) return false

  for(let i = 0; i < arr1.length; i++) {
    let v1 = arr1[i]
    let v2 = arr2[i]
    if(v1 !== v2) return false
  }
  return true
};