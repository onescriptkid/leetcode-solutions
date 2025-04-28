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

    let opts = []
    for(let word of wordDict) {

      let prefix = str.startsWith(word)
      if(prefix) {
        let nextstr = str.substring(word.length)
        let res = dfs(nextstr)
        opts.push(res)
      }
    }
    // console.log('str', str, 'opts', opts)


    if(opts.length === 0) {
      memo[str] = false
      return memo[str]
    }
    let hasTrue = false
    for(let opt of opts) {
      if(opt === true) {
        hasTrue = true
        break;
      }
    }

    memo[str] = hasTrue
    return hasTrue
  }
  return dfs(s)


};