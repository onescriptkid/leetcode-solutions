/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {

   // 2932

   // 29 23 
  let digits = []
  while (num > 0) {
    let digit = num % 10
    digits.push(digit)
    num = Math.floor(num / 10)
  }

  digits.sort((a,b) => a > b ? 1 : -1)

  let num1 = digits[0] * 10 + digits[2]
  let num2 = digits[1] * 10 + digits[3]

  return num1 + num2
};