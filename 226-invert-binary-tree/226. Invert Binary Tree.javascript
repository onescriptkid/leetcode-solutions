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
 * @return {TreeNode}
 */
var invertTree = function(root) {

  function dfs(curr) {
    if(curr === null) return

    let left = curr.left
    curr.left = curr.right
    curr.right = left

    dfs(curr.left)
    dfs(curr.right)
  }
  dfs(root)
  return root
};