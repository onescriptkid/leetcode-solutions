/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let memo = new Array(amount + 1).fill(undefined)

  function dfs(sum) {
    if(sum === amount) return 0
    if(sum > amount) return -1
    if(memo[sum] !== undefined) return memo[sum]

    let opts = []
    for(let coin of coins) {
      let opt = dfs(sum + coin)
      if(opt === -1) continue  
      opts.push(opt)
    }

    if(opts.length === 0) return memo[sum] = -1

    return memo[sum] = 1+Math.min(...opts)
  }
  return dfs(0)
    
};