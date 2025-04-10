/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {

  // 8 4 6 2 3 
  //         i 
  // 5 7 4
  let stack = []
  let out = new Array(prices.length).fill(0)
  for(let i = prices.length - 1; i >= 0; i--) {
    let price = prices[i]
    // console.log('i', i, 'p', price, 'stack', stack)
    
    while(price < stack[stack.length - 1] && stack.length !== 0) {
      stack.pop()
    }

    if(stack.length === 0) {
      out[i] = prices[i]
    } else {
      out[i] = price - stack[stack.length - 1]
    }

    stack.push(price)



  }
  return out
};
