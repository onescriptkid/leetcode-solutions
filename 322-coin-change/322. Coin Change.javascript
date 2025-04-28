/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

  let memo = {}

  function dfs(left) {
    if(left === 0) {
      return 0
    }
    if(left < 0) {
      return -1
    }
    if(memo[left] !== undefined) {
      return memo[left]
    }

    let opts = []
    for(let coin of coins) {
      let res = dfs(left - coin)
      if(res !== -1) {
        opts.push(1 + res)
      }
    }
    // console.log('left', left, 'opts', opts)

    if(opts.length === 0) {
      memo[left] = -1
      return memo[left]
    }

    let min = Math.min(...opts)
    memo[left] = min
    return memo[left]
  }
  return dfs(amount)
};