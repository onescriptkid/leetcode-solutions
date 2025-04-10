/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  // f(0) = 0
  // f(1) = 1
  // f(2) = 1
  // f(3) = f(0) + f(1) + f(2)

  let memo = {}
  function dfs(i) {
    if(i === 0) return 0
    if(i === 1) return 1
    if(i === 2) return 1
    if(memo[i] !== undefined) {
      return memo[i]
    }

    memo[i] = dfs(i-1) + dfs(i-2) + dfs(i-3)
    return memo[i]
  }
  return dfs(n)
    
};