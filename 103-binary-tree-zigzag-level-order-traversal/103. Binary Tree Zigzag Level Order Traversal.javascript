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
var zigzagLevelOrder = function(root) {
  // 
  if(root === null) return []

  let out = []
  let queue = [root]
  let i =0

  while(queue.length > 0) {
    let length = queue.length
    let level = []
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
    if(i % 2=== 1) level.reverse()
    i++
    out.push(level)
  }

  return out
};