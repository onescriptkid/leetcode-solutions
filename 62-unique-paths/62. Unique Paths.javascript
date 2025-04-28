/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

  let memo = {}

  function dfs(r, c) {
    let key = `${r},${c}`
    if(r >= m || c >= n) {
      return 0
    }
    if(r === m-1 && c === n-1) {
      return 1
    }
    if(memo[key] !== undefined) {
      return memo[key]
    }

    let opt1 = dfs(r+1,c)
    let opt2 = dfs(r,c+1)

    let sum = opt1 + opt2
    memo[key] = sum
    return memo[key]
  }
  return dfs(0,0)
};