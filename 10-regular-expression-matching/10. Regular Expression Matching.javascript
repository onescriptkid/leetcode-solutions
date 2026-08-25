/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let memo = new Array(s.length+1).fill(undefined).map(v => new Array(p.length + 1).fill(undefined))

  function dfs(i, j) {
    if(j === p.length) {
      return i === s.length
    }
    if(memo[i][j] !== undefined) {
      return memo[i][j]
    }

    // aa    a
    // i     j

    // star => 2 paths
    // aa    b*
    // aa    a*

    // no star => match
    // aa    a
    let match = i < s.length && (s[i] == p[j] || p[j] === '.')
    if(p[j+1] === '*') {
      let opt1 = dfs(i, j+2)
      let opt2 = match && dfs(i+1, j)
      return memo[i][j] = opt1 || opt2
    }

    let opt3 = match && dfs(i+1, j+1)
    return memo[i][j] = opt3

    //

    //
  }
  return dfs(0,0)
};