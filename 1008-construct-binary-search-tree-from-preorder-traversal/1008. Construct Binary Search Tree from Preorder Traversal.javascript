/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {


  function dfs(arr) {
    if(arr.length === 0) return null
    let p = arr[0]
    let node = new TreeNode(p)

    let l = 1
    let r = arr.length - 1

    while(l <= r) {
      let m = Math.floor((l + r) / 2)
      let mid = arr[m]

      if(mid < p) {
        l = m + 1
      } else {
        r = m - 1
      }
    }

    let left = arr.slice(1, l)
    let right = arr.slice(l, arr.length)

    node.left = dfs(left)
    node.right = dfs(right)

    return node
  }   
  return dfs(preorder)
};