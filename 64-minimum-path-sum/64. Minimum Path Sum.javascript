/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let rows = grid.length
  let cols = grid[0].length   

  let memo = new Array(rows).fill(0).map(v => new Array(cols).fill(undefined))

  function dfs(r, c) {
    if(r >= rows || c >= cols) return -1
    if(r === rows - 1 && c === cols - 1) return grid[r][c]
    if(memo[r][c] !== undefined) return memo[r][c]

    let opt1 = dfs(r,c+1)
    let opt2 = dfs(r+1, c)
    let opts = []

    if(opt1 !== -1) opts.push(opt1)
    if(opt2 !== -1) opts.push(opt2)

    return memo[r][c] = grid[r][c] + Math.min(...opts)
  }
  return dfs(0,0)

};