/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  let neg = false
  if(num < 0) {
    neg = true
    num = -num 
  }
  if(num === 0) return "0"

  // 100 -> 202
  // 202
  // 15 -> 
  // 100 10 1
  // 49   7 1 

  //      2 1 

  let base7 = ""
  while(num > 0) {
    let digit = num % 7
    base7 = digit += base7
    num = Math.floor(num / 7)
  }

  if(neg) {
    return "-" + base7
  }
  return base7
};