/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {

  let xy = 0
  let xz = 0
  let yz = 0
  // 1 2 => 2
  // 3 4 => 4
  for(let i = 0; i < grid.length; i++) {
    let maxrow = undefined
    let maxcol = undefined
    for(let j = 0; j < grid[i].length; j++) {
      if(grid[i][j] > 0) {
        xy++
      }
      let col = grid[j][i]
      let row = grid[i][j]
      if(maxrow === undefined) {
        maxrow = row
      } else if(row > maxrow) {
        maxrow = row
      }
      if(maxcol === undefined) {
        maxcol = col
      } else if(col > maxcol) {
        maxcol = col
      }
    }
    xz+=maxrow
    yz+=maxcol
  }
  return xy + xz + yz
};