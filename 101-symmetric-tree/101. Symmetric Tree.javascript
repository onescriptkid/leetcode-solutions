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
 * @return {boolean}
 */
var isSymmetric = function(root) {

  // function isSame(curr0, curr1) {
  //   if(curr0 === null && curr1 === null) return true
  //   if(curr0 === null && curr1 !== null) return false
  //   if(curr0 1== null && curr1 === null) return false

  //   if(curr0.val !== curr2.val) return false

  //   return isSame(curr0.left, curr1.left) && isSame(curr0.right, curr1.right)
  // }   

  function issym(curr0, curr1) {
    if(curr0 === null && curr1 === null) return true
    if(curr0 === null && curr1 !== null) return false
    if(curr0 !== null && curr1 === null) return false
    
    if(curr0.val !== curr1.val) return false
    // let left = curr.left
    // let right = curr.right


    // let same = isSame(curr.left, curr.right)

    return issym(curr0.left, curr1.right) && issym(curr0.right, curr1.left)
  }
  return issym(root, root)



};