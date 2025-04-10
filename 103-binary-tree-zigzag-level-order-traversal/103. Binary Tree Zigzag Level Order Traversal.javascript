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
  let levels = []
  // [
  //   [3]
  //   [9 20]
  //   [15, 17]
  // ]

  function dfs(curr, level) {
    if(curr === null) {
      return
    }
    if(levels[level] === undefined) {
      levels[level] = [curr.val]
    } else {
      levels[level].push(curr.val)
    }

    dfs(curr.left, level +1)
    dfs(curr.right, level+1)
  }
  dfs(root, 0)
  console.log(levels)

  for(let i = 0; i < levels.length; i++) {
    if(i % 2 === 1) {
      let arr = levels[i]
      // 0 1 2 3 4  5 => < 2
      // 0 1 2
      // 0 1 2 3    4 => < 2
      for(let j = 0; j < Math.floor(levels[i].length/2); j++) {
        let tmp = levels[i][j]
        levels[i][j] = levels[i][arr.length - 1 - j]
        levels[i][arr.length - 1 - j] = tmp
      }
    }
  }
  console.log(levels)
  return levels

};