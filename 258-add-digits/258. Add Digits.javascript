/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

  function sumDigits(n) {
    
    let sum = 0
    while(n > 0) {
      let digit = n % 10
      sum+=digit
      n = Math.floor(n / 10)
    }
    return sum
  }

  while(num >= 10) {
    let sum = sumDigits(num)

    num = sum
  }
  return num

};