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
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {

  function dfs(curr1, curr2) {
    if(curr1 === null && curr2 === null) {
      return null
    }
    let node
    if(curr1 !== null && curr2 === null) {
      node = new TreeNode(curr1.val)
    }
    if(curr1 === null && curr2 !== null) {
      node = new TreeNode(curr2.val)
    }
    if(curr1 !== null && curr2 !== null) {
      node = new TreeNode(curr1.val + curr2.val)
    }
    node.left = dfs(curr1 && curr1.left, curr2 && curr2.left)
    node.right = dfs(curr1 && curr1.right, curr2 && curr2.right)
    return node
  }
  return dfs(root1, root2)
};