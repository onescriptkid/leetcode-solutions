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
 * @return {number[][]}
 */
var levelOrder = function(root) {

  let out = []
  function recurse(curr, level) {
    if(curr === null) return
    console.log("curr.val", curr.val, "out", out)
    if(out[level] === undefined) {
      out[level] = [curr.val] 
    } else {
      out[level].push(curr.val)
    }

    recurse(curr.left, level+1)
    recurse(curr.right, level+1)

  }
  recurse(root, 0)
  
  return out
};