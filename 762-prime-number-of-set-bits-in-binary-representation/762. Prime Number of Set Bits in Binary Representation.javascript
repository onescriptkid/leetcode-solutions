/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {

  function countBits(num) {
    let bits = 0
    while(num > 0) {
      let digit = num % 2
      if(digit === 1) {
        bits++
      }
      num = Math.floor(num / 2)
    }
    return bits
  }
  function isPrime(num) {
    if(num === 1)  return false

    for(let i = 2; i <=Math.floor(num ** 0.5); i++) {
      if(num / i === Math.floor(num / i)) {
        return false
      }
    }

    return true
  }

  let out = 0
  for(let i = left; i <= right; i++) {
    let bits = countBits(i)
    if(isPrime(bits)) {
      out++
    }
  }
  return out

};