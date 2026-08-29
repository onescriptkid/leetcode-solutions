/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
     let memo = new Array(prices.length).fill(0).map(v => new Array(2).fill(0).map(v => new Array(k+1).fill(undefined)))

  function dfs(i, buying, t) {
    if(i >= prices.length) return 0
    if(t >= k) return 0
    if(memo[i][buying][t] !== undefined) return memo[i][buying][t]

    let opt1 = dfs(i+1, buying, t)
    let opt2 = 0
    if(buying) {
      opt2 = -prices[i] + dfs(i+1, 0, t)
    } else {
      opt2 = prices[i] + dfs(i+1, 1, t+1)
    }

    return memo[i][buying][t] = Math.max(opt1, opt2)
  }
  return dfs(0, 1,0) 
};