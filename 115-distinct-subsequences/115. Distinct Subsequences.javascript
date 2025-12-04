/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  let memo = new Array(s.length + 1).fill(0).map(v => new Array(t.length + 1).fill(undefined))   
  
  function dfs(i, j) {
    if(memo[i][j] !== undefined) return memo[i][j]
    if(i === s.length && j === t.length) return 1
    if(i === s.length) return 0

    let opt1 = dfs(i+1, j)
    let opt2 = s[i] === t[j] ? dfs(i+1, j+1) : 0

    return memo[i][j] = opt1 + opt2
  }
  return dfs(0,0)
};