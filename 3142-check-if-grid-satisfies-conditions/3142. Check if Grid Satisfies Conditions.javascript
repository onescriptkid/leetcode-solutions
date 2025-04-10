/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function(grid) {
  let rows = grid.length
  let cols = grid[0].length
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      // console.log('r', r, 'c', c)
      if(grid[r+1] !== undefined) {
        if(grid[r][c] !== grid[r+1][c]) return false
      }
      if(grid[r][c+1] !== undefined) {
        if(grid[r][c+1] === grid[r][c]) return false
      }
    }
  }
  return true
};