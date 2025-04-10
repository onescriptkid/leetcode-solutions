/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {

  let out = []
  for(let i = left; i <= right; i++) {
    if(isSelfDividing(i)) {
      out.push(i)
    }
  }

  function isSelfDividing(num) {
    let tmp = num
    while(tmp > 0) {
      let digit = tmp % 10
      if(num % digit !== 0) return false
      tmp = Math.floor(tmp / 10)
    }
    return true
  }

  return out
};