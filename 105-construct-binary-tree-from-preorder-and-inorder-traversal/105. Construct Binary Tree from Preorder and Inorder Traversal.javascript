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
  if(preorder.length === 0 || inorder.length === 0) {
    return null
  }

  // pre
  // [3] [9] [20 15 7]
  // c   l   r

  // in
  // [9] [3] [15 20 7] 
  // l   c   r
  let node = new TreeNode(preorder[0])
  let i = inorder.indexOf(preorder[0])

  node.left = buildTree(preorder.slice(1, i+1), inorder.slice(0, i))
  node.right = buildTree(preorder.slice(i+1), inorder.slice(i+1))
  return node
};