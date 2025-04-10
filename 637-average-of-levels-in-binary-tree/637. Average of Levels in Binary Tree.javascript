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
  let levels = []

  function dfs(curr, depth) {
    if(curr === null) return
    if(levels[depth] === undefined) {
      levels[depth] = [curr.val]
    } else {
      levels[depth].push(curr.val)
    }
    dfs(curr.left, depth + 1)
    dfs(curr.right, depth + 1)
  }
  dfs(root, 0)
  console.log('levels', levels)

  let out = []
  for(let level of levels) {
    let sum = 0
    for(let val of level) {
      sum+=val
    }
    out.push(sum / level.length)
  }

  return out
};