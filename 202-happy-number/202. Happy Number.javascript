/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

  function squareOfDigits(num) {
    let out = 0
    while(num > 0) {
      let digit = num % 10
      out += (digit ** 2)
      num = Math.floor(num / 10)
    }
    return out
  }

  let set = new Set()
  while(n !== 1) {
    let digitsquare = squareOfDigits(n)

    n = digitsquare
    if(set.has(n)) {
      return false
    }
    set.add(n)
  }
  return true
};