/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {

  //   a c e -
  // a 0 0 0 0
  // b 0 0 0 0
  // c 0 0 0 0
  // d 0 0 0 0
  // e 0 0 0 0
  // - 0 0 0 0

  let dp = new Array(text1.length + 1).fill(0).map(v => new Array(text2.length + 1).fill(0))

  for(let i = text1.length - 1; i >= 0; i--) {
    for(let j = text2.length-1; j >= 0; j--) {
      if(text1[i] === text2[j]) {
        dp[i][j] = 1 + dp[i+1][j+1]
      } else {
        dp[i][j] = Math.max(dp[i][j+1], dp[i+1][j])
      }
    }
  }
  return dp[0][0]

};