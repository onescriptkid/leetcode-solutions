/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let rows = grid.length
  let cols = grid[0].length
  let memo= new Array(rows).fill(0).map(v => new Array(cols).fill(undefined))
  // console.log('memo', memo)

  function dfs(r,c) {
    if(r >= rows || c >= cols) {
      return -1
    }
    
    if(memo[r][c] !== undefined) {
      return memo[r][c]
    }
    if(r === rows-1 && c == cols-1) {
      return grid[r][c]
    }

    let opt1 = dfs(r, c+1)
    if(opt1 === -1) {
      opt1 = Infinity
    }
    let opt2 = dfs(r+1, c)
    if(opt2 === -1) {
      opt2  = Infinity
    }

    let min = Math.min(opt1, opt2)
    memo[r][c] = grid[r][c] + min
    // console.log('rc', r, c, grid[r][c], 'min', min, 'opt1', opt1, 'opt2', opt2)
    return memo[r][c]

  }
  
  return dfs(0,0)

  // for(let r = rows -1; r >= 0; r--) {
  //   for(let c = cols)
  // }

  // function dfs() {

  // }
  // return dp[0][0]

};