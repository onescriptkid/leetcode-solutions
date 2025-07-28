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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {


  function isSame(curra, currb) {
    if(curra === null && currb === null) {
      return true
    }
    if(curra === null && currb !== null) {
      return false
    }
    if(curra !== null && currb === null) {
      return false
    }
    if(curra.val !== currb.val) {
      return false
    }
    return isSame(curra.left, currb.left) && isSame(curra.right, currb.right)
  }

  function dfs(curr) {
    if(curr === null) return false

    if(isSame(curr, subRoot)) return true

    return dfs(curr.left) || dfs(curr.right)

  }
  return dfs(root)

};