/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  let memo = new Array(s1.length+1).fill(undefined).map(v => new Array(s2.length+1).fill(undefined).map(v => new Array(s3.length+1).fill(undefined)))   

  if(s1.length + s2.length !== s3.length) return false

  function dfs(i, j, k) {
    if(i === s1.length && j === s2.length) {
      return k === s3.length
    }
    if(memo[i][j][k] !== undefined) return memo[i][j][k]

    let opt1 = s1[i] === s3[k] && dfs(i+1, j, k+1)
    let opt2 = s2[j] === s3[k] && dfs(i, j+1, k+1)

    return memo[i][j][k] = Math.max(opt1, opt2)
  }
  return dfs(0, 0, 0)
};