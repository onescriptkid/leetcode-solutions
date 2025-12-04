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
  let arr = []

  function dfs(curr, sum) {
    if(curr === null) {
      return 0
    }

    if(curr.left === null && curr.right === null) {
      if(sum+curr.val === targetSum) {
        out.push([...arr, curr.val])
      }
      return
    }

    arr.push(curr.val)
    dfs(curr.left, sum+curr.val)
    dfs(curr.right, sum+curr.val)
    arr.pop()

  }
  dfs(root, 0)

  return out
};