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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let max
  //        1
  //     /     \
  //    2       3
  //   / \
  //  4   5
  function getDepth(curr) {
    // 'level', level)
    if(curr === null) {
      return 0
    }
    // console.log('curr', curr?.val) 
    // if(curr.left === null && curr.right === null) {
    //   return 1
    // }

    let left = getDepth(curr.left)
    let right = getDepth(curr.right)

    let dia = left + right
    if(max === undefined) {
      max = dia
    } else if(dia > max) {
      max = dia
    }
    // console.log('  curr', curr?.val, 'return', 1+ Math.max(left, right), 'dia', dia) // 'level', level)

    return 1 + Math.max(left, right)
  }
  getDepth(root)
  return max
};