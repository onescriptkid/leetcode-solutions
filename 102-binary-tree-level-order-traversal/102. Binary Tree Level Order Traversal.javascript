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
  let arr = root === null ? [] : [root]
  let out = []
  while(arr.length > 0) {
    let length = arr.length
    let level = []
    for(let i = 0; i < length; i++) {
      let curr = arr.shift()
      level.push(curr.val)

      if(curr.left !== null) {
        arr.push(curr.left)
      }
      if(curr.right !== null) {
        arr.push(curr.right)
      }
    }
    out.push(level)
  }
  return out
};