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
      if(grid[r][c] === "1") {
        count++
        dfs(r,c)
      }
    }
  }   

  return count

  function dfs(r,c) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) return
    if(grid[r][c] !== '1') return

    grid[r][c] = '#'

    dfs(r,c+1)
    dfs(r,c-1)
    dfs(r+1,c)
    dfs(r-1,c)
  }
};