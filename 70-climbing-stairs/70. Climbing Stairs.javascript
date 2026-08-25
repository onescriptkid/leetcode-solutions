/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

  let memo = new Array(n+1).fill(undefined)   

  function dfs(i) {
    if(i === n) return 1
    if(i > n) return 0
    if(memo[i] !== undefined) return memo[i]

    let opt1 = dfs(i+1)
    let opt2 = dfs(i+2)

    return memo[i] = opt1 + opt2
  }
  return dfs(0)
};