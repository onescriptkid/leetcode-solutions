/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let memo = {}   

  function dfs(str) {
    if(memo[str] !== undefined) return memo[str]
    if(str.length === 0) return 1
    if(str.length === 1) {
      if(str[0] !== '0') return 1
      return 0
    }

    if(str.length >= 2) {
      let c = str[0]
      if(c === '0') return 0

      let opt1 = dfs(str.slice(1))

      // 206
      let opt2 = 0
      if(c !== '0' && Number(str.slice(0,2)) <= 26) {
        opt2 = dfs(str.slice(2))
      }

      return memo[str] = opt1 + opt2
    }
  }
  return dfs(s)
};