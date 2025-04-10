/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function(grid) {

  for(let r = 0; r < grid.length-1; r++) {
    for(let c = 0; c < grid[r].length-1; c++) {
      let a = grid[r][c]
      let b = grid[r][c+1]
      let y = grid[r+1][c]
      let z = grid[r+1][c+1]
      let blacks = 0
      let whites = 0
      if(a === 'W') whites++
      if(a === 'B') blacks++
      if(b === 'W') whites++
      if(b === 'B') blacks++
      if(y === 'W') whites++
      if(y === 'B') blacks++
      if(z === 'W') whites++
      if(z === 'B') blacks++
      if(whites >= 3 || blacks >= 3) {
        return true
      }
    }
  }
  return false
};