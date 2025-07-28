/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

  let memo = {}
  let ob = obstacleGrid
  let rows = ob.length
  let cols = ob[0].length

  function dfs(r,c) {
    let key= `${r},${c}`
    if(memo[key] !== undefined) {
      return memo[key]
    }
    if(r >= rows || c >= cols) {
      return 0
    }
    if(ob[r][c] === 1) {
      return 0
    }
    if(r === rows -1 && c === cols-1) {
      return 1
    }

    let opt1 = dfs(r,c+1)
    let opt2 = dfs(r+1, c)
    // if(opt1 === -1 && opt2 === -1) {
    //   memo[r][c] = -1
    //   return memo[r][c]
    // }
    // if(opt2 === -1) {
    //   memo[r][c] = 1+opt1
    //   return memo[r][c]
    // }
    // if(opt1 === -1) {
    //   memo[r][c] = 1+opt2
    //   return memo[r][c]
    // }

    memo[key] = opt1 + opt2
    return memo[key]

  }
  return dfs(0,0)

};