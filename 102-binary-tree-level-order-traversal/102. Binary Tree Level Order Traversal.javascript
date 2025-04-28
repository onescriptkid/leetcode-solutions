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

  let queue = root ? [root] : []
  let levels = 0
  let out = []
  while(queue.length > 0) {
    let length = queue.length
    // console.log('queue', queue)

    for(let i = 0; i < length; i++) {
      let curr = queue.shift()
      // console.log('i', i, 'curr', curr?.val)
      if(out[levels] === undefined) {
        out[levels] = [curr.val]
      } else {
        out[levels].push(curr.val)
      }
      if(curr.left) queue.push(curr.left)
      if(curr.right) queue.push(curr.right)
    }
    levels++
  }
  return out
};