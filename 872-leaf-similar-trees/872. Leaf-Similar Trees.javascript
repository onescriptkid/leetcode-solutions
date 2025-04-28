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

  let leaves1 = []
  let leaves2 = []
  function dfs(curr1) {
    if(curr1 === null) return

    dfs(curr1.left) 
    if(curr1.left === null && curr1.right === null) {
      leaves1.push(curr1.val)
    }
    dfs(curr1.right)
  } 
  dfs(root1)

  function dfs2(curr2) {
    if(curr2 === null) return
    dfs2(curr2.left) 
    if(curr2.left === null && curr2.right === null) {
      leaves2.push(curr2.val)
    }
    dfs2(curr2.right)
  } 
  dfs2(root2)
  if(leaves1.length !== leaves2.length) return false

  for(let i = 0; i < leaves1.length; i++) {
    if(leaves1[i] !== leaves2[i]) {
      return false
    }
  }
  return true

};