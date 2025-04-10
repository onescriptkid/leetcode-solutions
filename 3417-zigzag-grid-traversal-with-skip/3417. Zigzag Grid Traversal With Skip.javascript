/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function(grid) {
  let out = []
  let i = 0
  for(let r = 0; r < grid.length; r++) {
    if (r % 2 === 0) {
      for (let c = 0; c < grid[r].length; c++) {
        if (i % 2 === 0) {
          out.push(grid[r][c])
        }
        i++
      }
    } else {
      for (let c = grid[r].length - 1; c >= 0; c--) {
        if (i % 2 === 0) {
          out.push(grid[r][c])
        }
        i++
      }
    }
  }
  return out
};