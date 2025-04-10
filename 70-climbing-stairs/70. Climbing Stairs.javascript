/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

  let dp = new Array(n + 1).fill(0)

  // 0 1 2 3 4
  // 1 1
  // f(0) = 1
  // f(1) = 1
  // f(2) = f(1) + f(0)
  // f(3) = f(2) + f(1)
  dp[0] = 1
  dp[1] = 1

  for(let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]




};