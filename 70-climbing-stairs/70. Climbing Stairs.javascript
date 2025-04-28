/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

  // f(0) = 1
  // f(1) = 1
  // f(2) = f(1) + f(0)
  // f(n) = f(n-1) + f(n-2)



  let memo = {}

  function dfs(steps) {
    if(steps === 0 || steps === 1) {
      return 1
    }
    if(memo[steps] !== undefined) {
      return memo[steps]
    }

    let opt = dfs(steps - 2) + dfs(steps - 1)
    memo[steps] = opt
    return memo[steps]
  }
  return dfs(n)
};