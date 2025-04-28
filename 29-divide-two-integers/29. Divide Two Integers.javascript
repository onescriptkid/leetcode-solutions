/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let neg = false
  if(dividend < 0 && divisor > 0) {
    neg = true
  }  
  if(dividend > 0 && divisor < 0) {
    neg = true
  }
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  // dividend = 20, divisor = 5
  // 20 /5 = 4
  // tmp = divisor
  // tmp = 5

  // tmp = 10, count = 2 
  // tmp = 20, count = 4
  // tmp = 40, count = 8

  // 40 >> 1, 8 >> 1
  // 20       4
  // dividend - 20

  // console.log('dividend', dividend, 'divisor', divisor)
  // console.log('')
  let result = 0
  while(dividend >= divisor) {
    let tmp = divisor
    let count = 1
    while(tmp <= (dividend >>1) ) {
      // console.log('tmp', tmp, 'dividend', dividend, 'count', count)
      count = count << 1
      tmp = tmp << 1
    }
    // tmp = tmp >> 1
    // count = count >> 1
    // console.log('  tmp', tmp, 'dividend', dividend, 'count', count)
    dividend = dividend - tmp
    // console.log('  dividend-tmp', dividend)
    result+=count
  }

  if(neg) {
    result = -result
    if(result < -(2 ** 31)) {
      return -(2 ** 31)
    }
    return result
  }

  if(result > 2 ** 31-1) {
    return 2 ** 31 -1
  }
  return result

  return -1
};