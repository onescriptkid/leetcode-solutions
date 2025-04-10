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

  function isSame(curr1, curr2) {
    if(curr1 === null && curr2 === null) {
      return true
    }
    if(curr1 === null && curr2 !== null) {
      return false
    }
    if(curr1 !== null && curr2 === null) {
      return false
    }
    if(curr1.val !== curr2.val) {
      return false
    }
    return isSame(curr1.left,curr2.left) && isSame(curr1.right, curr2.right) 
  }

  function dfs(curr) {
    if(curr === null) {
      return false
    }

    let sub =  isSame(curr, subRoot)
    if(sub) {
      return true
    }

    return dfs(curr.left) ||dfs(curr.right)
  }  
  return dfs(root)
};