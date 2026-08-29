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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  let out = []
  function dfs(curr, path, sum) {
    if(curr === null) return

    if(curr.left === null && curr.right === null) {
      if(targetSum === sum + curr.val) {
        out.push([...path, curr.val])
      }
    }

    path.push(curr.val)
    dfs(curr.left, path, sum+curr.val)
    dfs(curr.right, path, sum+curr.val)
    path.pop()
  }  
  dfs(root, [], 0)
  return out
};