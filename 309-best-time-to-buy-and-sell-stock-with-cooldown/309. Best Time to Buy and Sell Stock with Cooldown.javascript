/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let memo = new Array(prices.length).fill(undefined).map(v => new Array(2).fill(undefined))   

  function dfs(i, buying) {
    if(i >= prices.length) return 0
    if(memo[i][buying] !== undefined) return memo[i][buying]

    let opt1 = dfs(i+1, buying) 

    let opt2
    if(buying) {
      opt2 = -prices[i] + dfs(i+1,0)
    } else {
      opt2 = prices[i] + dfs(i+2, 1)
    }
    return memo[i][buying] = Math.max(opt1, opt2)
  }
  return dfs(0, 1)

};