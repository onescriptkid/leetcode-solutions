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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {

  let xdepth;
  let xparent;
  let ydepth;
  let yparent
  function dfs(curr, parent, depth) {
    if(curr === null) {
      return
    }
    if(curr.val === x) {
      xdepth = depth + 1
      xparent = parent
    }
    if(curr.val === y) {
      ydepth = depth + 1
      yparent = parent
    }
    dfs(curr.left, curr, depth + 1)
    dfs(curr.right, curr, depth + 1)
  } 
  dfs(root, null, 0)

  if(xparent !== yparent && xdepth == ydepth) {
    return true
  }
  return false
};