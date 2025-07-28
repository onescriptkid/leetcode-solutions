/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let memo = {}
  
  function dfs(left) {
    if(memo[left] !== undefined) {
      return memo[left]
    }
    if(left === 0) {
      return 0
    }
    if(left < 0) {
      return -1
    }

    let results = []
    for(let coin of coins) {
      let res = dfs(left - coin)
      if(res < 0) continue
      results.push(1 + res)
    }

    if(results.length === 0) {
      memo[left] = -1
      return memo[left]
    }

    memo[left] = Math.min(...results)
    return memo[left]
  }
  return dfs(amount)
};