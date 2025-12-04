/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let memo = new Array(m).fill(0).map(v => new Array(v).fill(undefined))   

  function dfs(r, c) {
    if(r >= m || c >= n) return 0
    if(r === m -1 && c === n - 1) return 1
    if(memo[r][c] !== undefined) return memo[r][c]

    let opt1 = dfs(r,c+1)
    let opt2 = dfs(r+1,c)

    return memo[r][c] = opt1 + opt2
  }
  return dfs(0, 0)
};