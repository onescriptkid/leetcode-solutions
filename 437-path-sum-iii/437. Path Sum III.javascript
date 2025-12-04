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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  let map = {0:1}
  let count = 0
  let prefixsum = 0

  function dfs(curr) {
    if(curr === null) return

    prefixsum+=curr.val
    count+=(map[prefixsum - targetSum] || 0)
    map[prefixsum]=(map[prefixsum] || 0) + 1

    dfs(curr.left)
    dfs(curr.right)

    map[prefixsum]--
    prefixsum-=curr.val
  }
  dfs(root)
  return count
};