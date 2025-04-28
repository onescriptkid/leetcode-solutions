/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

  let memo = new Array(s.length + 1).fill(undefined).map( v=> new Array(p.length + 1).fill(undefined))

  function dfs(i, j) {
    if(j === p.length) {
      return i === s.length
    }

    if(memo[i][j] !== undefined) {
      return memo[i][j]
    }
    // match
    let match = i < s.length && (s[i] === p[j] || p[j] === '.')
    if(p[j+1] === '*') {
      let opt1 = dfs(i, j+2)
      let opt2 = match && dfs(i+1, j)

      memo[i][j] = opt1 || opt2
      return memo[i][j]
    }

    let opt3 = match && dfs(i+1, j+1)
    memo[i][j] = opt3
    return memo[i][j]
    // no star
    // match && star
    // match char

  }  
  return dfs(0,0)
};