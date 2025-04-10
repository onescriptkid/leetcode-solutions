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
var isBalanced = function(root) {

  // function getHeight(curr, height) {
  //   if(curr === null) return height
  //   let left = getHeight(curr.left, height+1)
  //   let right = getHeight(curr.right, height+1)
  //   return Math.max(left, right)

  // }

  function dfs(curr, depth) {
    if(curr === null) return depth

    // get height of left or right
    let lh = dfs(curr.left, depth+1)
    let rh = dfs(curr.right,depth+1)

    // left or right tree already imbalanced
    if(lh === -1 || rh === -1) {
      return -1
    }

    // check if this tree is imbalanced 
    let diff = Math.abs(lh - rh)
    if(diff > 1) {
      return -1
    }

    // return height
    let height = Math.max(lh, rh)
    return height

  }
  let out = dfs(root, 0)
  if(out === -1) return false
  return true
};