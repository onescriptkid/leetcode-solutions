/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  let rows = heights.length
  let cols = heights[0].length
  let matrix = heights

  let pac = new Array(rows).fill(0).map(v => new Array(cols).fill(0))
  let atl = new Array(rows).fill(0).map(v => new Array(cols).fill(0))

  function dfs(r,c, prevHeight, visited) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) return
    if(visited[r][c] === 1) return
    if(prevHeight > matrix[r][c]) return

    visited[r][c] = 1
    dfs(r,c+1,matrix[r][c],visited)
    dfs(r,c-1,matrix[r][c],visited)
    dfs(r+1,c,matrix[r][c],visited)
    dfs(r-1,c,matrix[r][c],visited)
  }

  for(let r = 0; r < rows; r++) {
    dfs(r, 0, -1, pac)
    dfs(r,cols-1,-1,atl)
  }

  for(let c = 0; c < cols; c++) {
    dfs(0, c, -1, pac)
    dfs(rows-1, c, -1, atl)
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