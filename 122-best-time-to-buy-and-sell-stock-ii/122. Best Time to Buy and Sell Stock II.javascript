/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  
  let profit = 0;
  let tmp = null;
  for(let i = 0; i < prices.length; i++) {
    let price = prices[i]
    if(tmp !== null) {
      if(tmp < price) {
        profit+=price - tmp
      }
    } 
    tmp = price
  }
  return profit
};