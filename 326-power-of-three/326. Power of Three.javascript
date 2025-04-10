/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  // 9 3 1
  // 6 2 1 
  while(n >= 1) {
    if(n === 1) return true
    n = n / 3
  }
  return false
};