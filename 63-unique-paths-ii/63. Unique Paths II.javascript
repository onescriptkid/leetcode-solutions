/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

  let rows = obstacleGrid.length
  let cols = obstacleGrid[0].length
  let memo = new Array(rows).fill(0).map(v => new Array(cols).fill(undefined))

  function dfs(r,c) {
    if(r >= rows || c >= cols) return 0
    if(obstacleGrid[r][c] === 1) return 0
    if(r === rows - 1 && c === cols -1) return 1
    if(memo[r][c] !== undefined) return memo[r][c]

    let opt1 = dfs(r+1,c)
    let opt2 = dfs(r,c+1)

    // if(opt1 === -1 && opt2 === -1) {
    //   return memo[r][c] = -1
    // }
    // if(opt1 === -1) {
    //   return memo[r][c] = 1 + dfs()
    // }
    return memo[r][c] = opt1 + opt2
  }
  return dfs(0,0)

};