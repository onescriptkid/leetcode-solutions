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
  if(root === null) return []
  let queue = [root]   
  let out = []
  while(queue.length > 0) {
    let level = []
    let length = queue.length

    for(let i = 0; i < length; i++) {
      let curr = queue.shift()
      level.push(curr.val)

      if(curr.left !== null) {
        queue.push(curr.left)
      }
      if(curr.right !== null) {
        queue.push(curr.right)
      }
    }
    out.push(level)
  }
  return out
};