/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {

  // surface area = top + up + right + down + left 
  let rows = grid.length
  let cols = grid[0].length
  let total = 0
  for (let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      let val = grid[i][j]
      let side = 0
      // top and bottom
      if(grid[i][j] !== 0) {
        side+=2
      }

      // up
      if(grid[i-1] === undefined) {
       side+=grid[i][j] 
      } else if(grid[i-1][j] < grid[i][j]) {
        let diff = grid[i][j] - grid[i-1][j]
        side+=diff
      }
      // down
      if(grid[i+1] === undefined) {
       side+=grid[i][j] 
      }else if(grid[i+1][j] < grid[i][j]) {
        let diff = grid[i][j] - grid[i+1][j]
        side+=diff
      }
      // right
      if(grid[i][j+1] === undefined) {
       side+=grid[i][j] 
      } else if (grid[i][j+1] < grid[i][j]) {
        let diff = grid[i][j] - grid[i][j+1]
        side+=diff
      }
      // right
      if(grid[i][j-1] === undefined) {
       side+=grid[i][j] 
      } else if(grid[i][j-1] < grid[i][j]) {
        let diff = grid[i][j] - grid[i][j-1]
        side+=diff
      }
      // console.log('i', i, 'j', j, 'side', side)
      total+=side
    }
  }
  return total
};

// 18 + 9 + 4

// 8 + 8 + 4 + 4 + 4 + 4