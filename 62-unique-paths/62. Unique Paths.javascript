/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

  let memo = new Array(m+1).fill(0).map(v => new Array(n+1).fill(undefined))

  function dfs(r, c) {
    if(memo[r][c] !== undefined) {
      return memo[r][c]
    }
    if(r === m || c === n) {
      return 0
    }
    if(r === m-1 && c === n-1) {
      return 1
    }

    let opt1 = dfs(r+1, c)
    let opt2 = dfs(r, c+1)
    memo[r][c] = opt1 + opt2
    
    return memo[r][c]
  }
  return dfs(0,0)
};