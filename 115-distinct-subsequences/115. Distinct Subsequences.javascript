/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  // rabbbit rabbit
  //   dfs(i, j+1)
  //   match && dfs(i+1, j+1)
  let memo = new Array(s.length + 1).fill(0).map(v => new Array(t.length + 1).fill(undefined))

  function dfs(i, j) {
    if(memo[i][j] !== undefined) {
      return memo[i][j]
    }
    if(j === t.length) {
      return 1
    }
    if(i === s.length) {
      return 0
    }

    let opt1 = 0
    if(s[i] === t[j]) {
      opt1 = dfs(i+1,j+1)
    }
    let opt2 = dfs(i+1, j)

    memo[i][j] = opt1 + opt2
    return memo[i][j]
  }
  return dfs(0,0)

};