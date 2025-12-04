/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0
  let minprice = Infinity   
  for(let price of prices) {
    minprice = Math.min(minprice, price)

    let profit = price - minprice
    max = Math.max(max, profit)
  }
  return max
};