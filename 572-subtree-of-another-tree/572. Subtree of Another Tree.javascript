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

  function isSame(curr0, curr1) {
    if(curr0 === null && curr1 === null) return true
    if(curr0 === null && curr1 !== null) return false
    if(curr0 !== null && curr1 === null) return false

    if(curr0.val !== curr1.val) return false

    return isSame(curr0.left, curr1.left) && isSame(curr0.right, curr1.right)
  }   

  function isSub(curr0, curr1) {
    if(curr0 === null && curr1 === null) return true
    if(curr0 === null || curr1 === null) return false

    return isSame(curr0, curr1) || isSub(curr0.left, curr1) || isSub(curr0.right, curr1)
  }

  return isSub(root, subRoot)
};