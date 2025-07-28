/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

  
  let rows = grid.length
  let cols = grid[0].length
  let maxarea = 0

  for(let r = 0; r < rows;  r++) {
    for(let c = 0; c < cols; c++) {
      
      if(grid[r][c] === 1) {
        let area = dfs(r,c)
        maxarea = Math.max(area, maxarea)
      }
    }
  }

  function dfs(r,c) {
    if(r < 0 || r >= rows || c < 0 || c>= cols) {
      return 0
    }
    if(grid[r][c] === '#') {
      return 0
    }
    if(grid[r][c] === 0) {
      return 0
    }
    grid[r][c] = '#'
    let area = 1 + dfs(r,c+1) + dfs(r+1,c) + dfs(r-1,c) + dfs(r,c-1)
    return area
  }

  return maxarea

};