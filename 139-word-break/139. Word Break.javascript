/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let memo = {}
  function dfs(str) {
    if(str === '') return true
    if(memo[str] !== undefined) return memo[str]

    let any = false
    for(let word of wordDict) {
      let isPrefix = str.startsWith(word)
      if(isPrefix) {
        let opt = dfs(str.slice(word.length))
        if(opt) {
          any = true
          break
        }
      }
    }

    return memo[str] = any
  }   
  return dfs(s)
};