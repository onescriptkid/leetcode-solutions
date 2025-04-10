/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {

  let rows = grid.length
  let cols = grid[0].length
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      let val = grid[r][c]
      if(r === c) {
        if(val === 0) {
          return false 
        }
      } else if(r === cols -1 - c) {
        if(val === 0) {
          return false
        }
      } else {
        if(val !== 0) {
          return false
        }
      }

    }
  }   
  // 2   3 -
  return true
};