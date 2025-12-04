/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let rows = grid.length
  let cols = grid[0].length
  let memo = new Array(rows).fill(0).map(v => new Array(cols).fill(undefined))

  function dfs(r,c) {
    if(r >= rows || c >= cols) return -1
    if(r === rows - 1 && c === cols - 1) return grid[r][c]
    if(memo[r][c] !== undefined) return memo[r][c]

    let opt1 = dfs(r+1, c)
    let opt2 = dfs(r, c+1)

    let opts = []
    if(opt1 !== -1) opts.push(opt1)
    if(opt2 !== -1) opts.push(opt2)

    if(opts.length === 0) return memo[r][c] === -1

    // console.log('r c', r,c, '-', grid[r][c], opts, '-', grid[r][c] + Math.min(...opts))

    return memo[r][c] = grid[r][c] + Math.min(...opts)
  }
  return dfs(0,0)

  // for(let r = rows -1; r >= 0; r--) {
  //   for(let c = cols)
  // }

  // function dfs() {

  // }
  // return dp[0][0]

};