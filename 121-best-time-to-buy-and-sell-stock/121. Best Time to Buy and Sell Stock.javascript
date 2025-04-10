/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  let max;
  let min
  for(let price of prices) {

    if(min === undefined) {
      min = price
    } else if(price < min) {
      min = price
    }
    let profit = price - min
    if(max === undefined) {
      max = profit
    } else if(profit > max) {
      max = profit
    }
  }   
  return max
};