/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {

  let rows = grid.length
  let cols = grid[0].length
  let p = 0
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(grid[r][c] === 1) {
        let left = grid[r][c-1]
        let right = grid[r][c+1]
        let up = grid[r+1] && grid[r+1][c]
        let down = grid[r-1] && grid[r-1][c]

        if(left === undefined || left === 0) {
          p++
        } 
        if(right === undefined || right === 0) {
          p++
        }
        if(up === undefined || up === 0) {
          p++
        }
        if(down === undefined || down === 0) {
          p++
        }
      }
    }
  }
  return p
};