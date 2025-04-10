/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {


  let min1
  let min2
  for(let p of prices) {
    if(min1 === undefined) {
      min1 = p
    } else if(p < min1) {
      min2 = min1
      min1 = p
    } else if(min2 === undefined) {
      min2 = p
    } else if(p < min2) {
      min2 = p
    }
  }
  let sum = min1 + min2
  if(sum <= money) {
    return money - sum
  }
  return money
};