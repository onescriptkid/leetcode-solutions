/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

  // catsandog, [cats, dog, sand, and, cat]   
  let memo = []
  let set = new Set(wordDict)
  function dfs(str) {
    if(memo[str] !== undefined) {
      return memo[str]
    }
    if(str.length === 0) {
      return true
    }

    // catsandog
    // cats => andog
    // dog  => catsan
    // sand => catog
    // 012345678
    // catsandog
    //    sand
    let options = []
    let res = false
    for(let word of set) {
      let i = str.indexOf(word)
      if(i !== -1) {
        let left = str.slice(0,i)
        let right = str.slice(i+word.length)
        res = dfs(left) && dfs(right)
        if(res === true) {
          memo[str] = true
          return memo[str]
        }
      }
    }
    memo[str] = false
    return memo[str]
  }
  return dfs(s)
};