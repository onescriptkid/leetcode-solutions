/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function(grid) {
  let ops = 0
  // 3 1
  // p v
  // console.log(grid)
  for(let c = 0; c < grid[0].length; c++) {
    for(let r = 1; r < grid.length; r++) {
      let val = grid[r][c]
      let prev = grid[r-1][c]
      if(prev !== undefined) {
        if(prev >= val) {
          let newVal = prev + 1
          ops = ops + (prev - val) + 1
          grid[r][c] = newVal
        }
      }
    }
  }
  // console.log(grid)
  return ops
};