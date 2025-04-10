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
var findMode = function(root) {
  let modes = []
  let counts = {}
  function dfs(curr) {
    if(curr === null) {
      return
    }
    if(counts[curr.val] === undefined) {
      counts[curr.val] = 1
    } else {
      counts[curr.val]++
    }
    dfs(curr.left)
    dfs(curr.right)
  }
  dfs(root)
  let keys = Object.keys(counts)
  let max = undefined
  for(let key of keys) {
    let count = counts[key]
    if(max === undefined) {
      max = count
      modes.push(Number(key))
    } else if(max === count) {
      modes.push(Number(key))
    } else if(count > max) {
      modes = [Number(key)]
      max = count
    }
  }
  return modes
};