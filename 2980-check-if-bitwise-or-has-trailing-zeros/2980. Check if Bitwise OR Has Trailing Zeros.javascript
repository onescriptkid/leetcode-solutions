/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function(nums) {
  let found = 0
  for(let num of nums) {
    // let trailingZero = num %
    // console.log('num', num, 'num', num.toString(2)) //, 'trailingZero', trailingZero)
    if(num % 2 === 0) {
      found++
    }
    if(found === 2) {
      return true
    }
  }
  return false
};