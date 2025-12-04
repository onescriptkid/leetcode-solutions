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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  let out = []

  let queue = [root]

  while(queue.length > 0) {
    let length = queue.length
    let sum = 0
    for(let i = 0; i < length; i++) {
      let curr = queue.shift()

      sum+=curr.val 

      if(curr.left !== null) {
        queue.push(curr.left)
      }
      if(curr.right !== null) {
        queue.push(curr.right)
      }
    }
    out.push(sum / length)
  }

  return out
};