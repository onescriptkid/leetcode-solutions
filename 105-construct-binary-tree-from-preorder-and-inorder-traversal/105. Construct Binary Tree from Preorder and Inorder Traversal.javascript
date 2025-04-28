/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

  let i = 0
  let p = 0

  // 3 9 20 15 7 
  // c l r
  //   0

  // 9 3 15 20 7
  // l c r
  // 0
  function build(end) {
    if(inorder[i] !== end) {
      let node = new TreeNode(preorder[p])
      p++
      node.left = build(node.val)
      i++
      node.right = build(end)
      return node
    }
    return null
  }
  return build()
};