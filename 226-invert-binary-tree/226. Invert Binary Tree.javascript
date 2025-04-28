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

  function invert(curr) {
    if(curr === null) {
      return null
    }
    let left = curr.left
    curr.left = curr.right
    curr.right = left

    invert(curr.left)
    invert(curr.right)
  }
  invert(root)
  return root

};