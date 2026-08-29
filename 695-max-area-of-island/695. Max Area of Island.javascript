/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

  let max = 0
  let rows = grid.length
  let cols = grid[0].length

  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      max = Math.max(max, dfs(r,c))
    }
  }   

  function dfs(r,c) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) return 0
    if(grid[r][c] !== 1) return 0

    grid[r][c] = 0

    return 1 + dfs(r,c+1) + dfs(r,c-1) + dfs(r+1, c) + dfs(r-1, c)
  }
  return max
};