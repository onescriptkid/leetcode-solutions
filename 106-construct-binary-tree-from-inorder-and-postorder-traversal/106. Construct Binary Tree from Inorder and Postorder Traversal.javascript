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
   // post l r c  9 15 7 20 3 
   // in   l c r  9 3 15 20 7

   // [9] [15  7 20][3]
   // [9] [3] [15 20 7]

   // post  9 15 7  20 3
   // in    9 3  15 20 7
   //         |        |
   if(inorder.length === 0 && postorder.length === 0) {
     return null
   }
  console.log(inorder, postorder)
   let i = inorder.indexOf(postorder[postorder.length - 1])
  let root = new TreeNode(postorder[postorder.length -1])

  root.left = buildTree(inorder.slice(0, i), postorder.slice(0, i))
  root.right = buildTree(inorder.slice(i+1, inorder.length), postorder.slice(i, postorder.length-1)) 

  return root 
};