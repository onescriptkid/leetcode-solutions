/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

  function getDigitSum(n) {
    let sum = 0
    while(n > 0) {
      let digit = n % 10
      sum+=digit
      n = Math.floor(n / 10)
    }
    return sum
  }


  while(num / 10 >= 1) {
    num = getDigitSum(num)
  }
  return num
};