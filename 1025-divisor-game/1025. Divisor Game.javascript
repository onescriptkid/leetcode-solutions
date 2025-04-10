/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
 
  let memo = {}
  function dfs(val) {
    if(memo[val] !== undefined) return memo[val]
    if(val === 2) {
      return true
    }
    if(val === 1) {
      return false
    }

    let options = []
    for(let i = 1; i < val; i++) {
      if(val % i === 0) {
        options.push(i)
      }
    }
    let outcome = false
    for(let option of options) {
      outcome = dfs(option)
      if(outcome === true) {
        break;
      }
    }
    memo[val] = outcome
    return outcome
  }
  return dfs(n)
};