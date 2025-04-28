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
var rightSideView = function(root) {
  if(root === null) return []

  let queue = [root]   
  let out = [root.val]
  while(queue.length > 0) {
    // console.log('queue', queue,'out', out)
    let level = 0
    let last
    let length = queue.length
    let i = 0
    while(i < length) {
      let curr = queue.shift()

      if(curr.left !== null) {
        last = curr.left
        queue.push(curr.left)
      }
      if(curr.right !== null) {
        last = curr.right
        queue.push(curr.right)
      }
      i++
    }
    level++
    if(last !== undefined) {
      out.push(last.val)
    }
  }
  return out
};