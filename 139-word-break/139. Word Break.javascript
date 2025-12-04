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

    let opts = []
    for(let word of wordDict) {
      if(str.startsWith(word)) {
        let opt = dfs(str.slice(word.length))
        opts.push(opt)
      }
    } 
    
    if(opts.length === 0) return memo[str] = false

    return memo[str] = opts.some(v => v)
  }
  return dfs(s)
};