/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  let rows = heights.length
  let cols = heights[0].length
  let pac = new Array(rows).fill(0).map(v => new Array(cols).fill(0))
  let atl = new Array(rows).fill(0).map(v => new Array(cols).fill(0))

  function dfs(r, c, prevHeight, visited) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) {
      return
    }
    if(prevHeight > heights[r][c]) {
      return
    }
    if(visited[r][c] === 1) {
      return
    }

    visited[r][c] = 1
    dfs(r, c+1, heights[r][c], visited)
    dfs(r, c-1, heights[r][c], visited)
    dfs(r+1, c, heights[r][c], visited)
    dfs(r-1, c, heights[r][c], visited)
  }

  for(let r = 0; r < rows; r++) {
    dfs(r, 0,heights[r][0], pac)
    dfs(r, cols-1, heights[r][cols-1], atl)
  }
  for(let c = 0; c < cols; c++) {
    dfs(0, c, heights[0][c], pac)
    dfs(rows -1, c, heights[rows-1][c], atl)
  }

  let out = []
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(pac[r][c] === 1 && atl[r][c] === 1) {
        out.push([r,c])
      }
    }
  }
  return out
};