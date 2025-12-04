/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let rows = grid.length
  let cols = grid[0].length
  let count = 0
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(grid[r][c] === '1') {
        count++
        bt(r,c)
      }
    }
  }   

  return count

  function bt(r,c) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) return
    if(grid[r][c] === '#') return
    if(grid[r][c] === '0') return

    grid[r][c] = '#'
    bt(r,c+1)
    bt(r,c-1)
    bt(r+1,c)
    bt(r-1,c)
  }
};