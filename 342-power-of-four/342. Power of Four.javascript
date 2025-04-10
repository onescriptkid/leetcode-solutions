/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  if(n < 0) return false

 // 64
 // 16
 // 4
 // 1
 // 5 

  while(n >= 1) {
    if(n === 1) return true

    n = n / 4
  }
  return false
};