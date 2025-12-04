/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function(grid) {

  //   1 2 3
  //   4 5 6
  //   7 8 9

  let i = 0
  let rows = grid.length
  let cols = grid[0].length
  let out = []
  for(let r = 0; r < rows; r++) {

    if (r % 2 === 0) {
      for (let c = 0; c < cols; c++) {
        if(i % 2 === 0) {
          out.push(grid[r][c])
        }
        i++
      }
    } else {
      for (let c = cols - 1; c >= 0; c--) {
        if(i %2 === 0) {
          out.push(grid[r][c])
        }
        i++
      }
    }
  }
  return out

};