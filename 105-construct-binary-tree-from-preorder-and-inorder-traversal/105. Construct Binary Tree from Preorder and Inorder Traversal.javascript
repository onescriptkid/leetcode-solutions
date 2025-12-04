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
  // pre  3 9 20 15 7
  //      c l r

  // in   9 3 15 20 7
  //      l c r
  if(preorder.length === 0 || inorder.length === 0) {
    return null
  }

  let p = preorder[0]
  let ii = inorder.indexOf(p)

  let node= new TreeNode(p)
  node.left = buildTree(preorder.slice(1, ii+1), inorder.slice(0, ii))
  node.right = buildTree(preorder.slice(ii+1), inorder.slice(ii+1))
  return node
};