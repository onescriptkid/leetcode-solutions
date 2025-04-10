/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  let opath = ''
  function dfs(curr, path) {
    if(curr === null) return null
    if(curr === target) {
      opath = path
      return
    }
    dfs(curr.left, path+"l")
    dfs(curr.right, path+"r")
  }
  dfs(original, "")
  let curr = cloned
  for(let c of opath) {
    if(c === 'l') {
      curr = curr.left
    } else {
      curr = curr.right
    }
  }
  return curr
};