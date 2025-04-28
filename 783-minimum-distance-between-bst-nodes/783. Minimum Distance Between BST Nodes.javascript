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
var minDiffInBST = function(root) {
  let gmin
  let prev
  function dfs(curr) {
    if(curr === null) {
      return
    }
    dfs(curr.left)
    if(prev !== undefined) {
      let min = Math.min(curr.val, curr.val - prev)
      if(gmin === undefined) {
        gmin = min
      } else if(min < gmin){
        gmin = min
      }
    }

    prev = curr.val
    dfs(curr.right)
  }   

  dfs(root)
  return gmin
};