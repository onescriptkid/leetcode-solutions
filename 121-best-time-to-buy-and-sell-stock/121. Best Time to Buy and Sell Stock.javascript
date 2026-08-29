/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxprofit = 0
  let min = Infinity
  for(let price of prices) {

    min = Math.min(min, price)

    let profit = price - min
    maxprofit = Math.max(maxprofit, profit)
  }
  return maxprofit
};