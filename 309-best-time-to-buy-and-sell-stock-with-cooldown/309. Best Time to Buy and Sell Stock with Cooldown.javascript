/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let memo = new Array(prices.length + 1).fill(0).map(v => new Array(2).fill(undefined))   

  function dfs(i, buying) {
    if(i >= prices.length) return 0
    if(memo[i][buying] !== undefined) return memo[i][buying]

    let opt1 = dfs(i+1, buying)

    if(buying) {
      let opt2 = -prices[i] + dfs(i+1, false)
      memo[i][buying] = Math.max(opt1, opt2)
    } else {
      let opt2 = prices[i] + dfs(i+2, true)
      memo[i][buying] = Math.max(opt1, opt2)
    }

    return memo[i][buying]
  }
  return dfs(0, true)
};