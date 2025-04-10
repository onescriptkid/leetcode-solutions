/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
  
  // 012345689
  // 8421
  // 10
  // 1010

  let out = [0, 0]
  let i = 0

  while(n > 0) {
    let d = n % 2
    if(d === 1) {
      if(i % 2 === 0) {
        out[0]++
      } else {
        out[1]++
      }
    }
    i++
    n = Math.floor(n / 2)
  } 
  return out
};