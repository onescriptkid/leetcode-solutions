/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {

  let memo = {}
  function dfs(str) {
    if(memo[str] !== undefined) {
      return memo[str]
    }
    if(str.length === 0) {
      return 1
    }
    if(str.length === 1) {
      if(str !== "0") {
        return 1
      }
      return 0
    }
    if(str.length >= 2) {
      let opt1 = 0
      let c = str[0]
      if(c !== "0") {
        opt1 = dfs(str.substring(1))
      }

      let opt2 = 0
      if(c !== "0" && Number(str.substring(0,2)) <= 26) {
        opt2 = dfs(str.substring(2))
      }

      memo[str] = opt1 + opt2
      return memo[str]
    }
  }
  return dfs(s)
};