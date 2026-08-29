/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {

  if(n === 0) return [0]   
  if(n === 1) return [0,1]


  let dp = new Array(n+1).fill(0)
  dp[0] = 0
  dp[1] = 1

  for(let i = 2; i <= n; i++) {
    dp[i] = dp[i >> 1] + i % 2
  }

  return dp
};