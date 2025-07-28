/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

  let memo = {}

  function dfs(str) {
    if(memo[str] !== undefined) {
      return memo[str]
    }
    if(str === '') {
      return true
    }

    let results = []
    for(let word of wordDict) {
      let prefix = str.startsWith(word)
      if(prefix) {
        results.push(dfs(str.slice(word.length)))
      }
    }

    let flag = false
    for(let result of results) {
      if(result) {
        flag = true
        break;
      }
    }
    memo[str] = flag
    return memo[str]
  }
  return dfs(s)


};