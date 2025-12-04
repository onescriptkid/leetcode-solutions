/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if(inorder.length == 0 || postorder.length == 0) {
    return null
  }

  // in     9 3 15 20 7
  // post   9 15 7 20 3
    
  // in     9 3 15 20 7
  //        l c r 

  // post   9 15 7 20 3
  //        l r       c

  let p = postorder.at(-1)
  let pi = postorder.length - 1
  let ii = inorder.indexOf(p)

  let node = new TreeNode(p)

  node.left = buildTree(inorder.slice(0, ii), postorder.slice(0, ii))
  node.right = buildTree(inorder.slice(ii+1), postorder.slice(ii, pi))

  return node
};