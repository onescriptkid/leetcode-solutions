/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    // 7 1 5 3 6 4
    //   b s b s
    //     4   3

    let min
    let maxprofit = 0
    for(let price of prices) {

      if(min === undefined) {
        min = price
      } else if(price < min) {
        min = price
      } else if(price > min) {
        let profit = price - min
        maxprofit+=profit
        min = price
      }
    } 

    return maxprofit
};