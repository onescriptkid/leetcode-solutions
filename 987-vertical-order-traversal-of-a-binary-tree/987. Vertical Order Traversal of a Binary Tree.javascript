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
var verticalTraversal = function(root) {
  let map = {}
  let min = 0
  let max = 0

  function dfs(curr, r, c) {
    if(curr === null) return
    if(map[c] === undefined) map[c] = []
    map[c].push([curr.val, r, c])

    min = Math.min(min, c)
    max = Math.max(max, c)

    dfs(curr.left, r+1, c-1)
    dfs(curr.right, r+1, c+1)
  }   
  dfs(root, 0, 0)

  let out = []
  for(let i = min; i <= max; i++) {
    map[i].sort((a,b) => {
      if(a[1] > b[1]) {
        return 1
      } else if(a[1] < b[1]) {
        return -1
      } else if(a[0] > b[0]) {
        return 1
      } else {
        return -1
      }
    })
    out.push(map[i].map(v => v[0]))
  }

  return out
};