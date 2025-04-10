/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {

  // 16 / 2
  // 3 / 2

  let tmp = n
  while(tmp >= 1) {
    if(tmp === 1) return true
    if(tmp === 0) return false

    tmp = tmp / 2
  }
  return false

};