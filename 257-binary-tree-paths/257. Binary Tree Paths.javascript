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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let paths = []
  function dfs(curr,path) {
    if(curr === null) {
      return
    }
    if(curr.left === null && curr.right === null) {
      path = path + curr.val
      paths.push(path)
    }
    dfs(curr.left, path + curr.val + "->")
    dfs(curr.right, path + curr.val + "->")
  }
  dfs(root, "")
  return paths
};