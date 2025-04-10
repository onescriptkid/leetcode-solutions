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
    if(left < 0) {
      return -1
    }
    if(left === 0) {
      return 0
    }
    let results = []
    for(let i = 0; i < coins.length; i++) {
      let coin = coins[i]
      let res = dfs(left - coin)
      if(res >= 0) {
        results.push(1 + res)
      }
    } 

    if(results.length === 0) {
      memo[left] = -1
      return memo[left]
    }
    let min = Math.min(...results)
    memo[left] = min
    return memo[left]
  }
  return dfs(amount)
};