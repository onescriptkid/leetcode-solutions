/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {

  while(n >= 1) {
    if(n === 1) return true

    n = n / 4
  }

  return false

};