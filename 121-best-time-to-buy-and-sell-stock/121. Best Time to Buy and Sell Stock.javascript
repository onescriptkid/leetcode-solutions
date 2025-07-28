/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  let maxprofit = 0
  let min = prices[0]
  for(let i = 1; i < prices.length; i++) {
    let price = prices[i]

    let profit = price - min
    maxprofit = Math.max(maxprofit, profit)
    min = Math.min(min, price)
  }
  return maxprofit


};