/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {

  // 0 =>   0   
  // 1 =>   1
  // 2 =>  10
  // 3 =>  11
  // 4 => 100
  // 5 => 101
  // 6 => 110

  let dp = new Array(n+1).fill(0)

  for(let i = 0; i <= n; i++) {
    dp[i] = dp[i>>1] + (i&1)
  }

  return dp
};