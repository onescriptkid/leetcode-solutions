/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  let memo = new Array(strs.length + 1).fill(0).map(v => new Array(m+1).fill(0).map(v => new Array(n+1).fill(undefined)))   

  function dfs(i, j, k) {
    if(i >= strs.length) return 0
    if(memo[i][j][k] !== undefined) return memo[i][j][k]

    let opt1 = dfs(i+1, j, k)

    let opt2 = 0
    let zeroes = 0
    let ones = 0
    for(let c of strs[i]) {
      if(c === '0') zeroes++
      if(c === '1') ones++
    }

    if(j + zeroes <= m && k +ones <= n) {
      opt2 = 1+dfs(i+1, j+zeroes, k+ones)
    }

    return memo[i][j][k] = Math.max(opt1, opt2)
  }
  return dfs(0, 0, 0)
};