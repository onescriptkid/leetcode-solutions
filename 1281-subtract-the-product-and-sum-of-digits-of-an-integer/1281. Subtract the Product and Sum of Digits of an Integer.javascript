/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {

  let digits = []

  while(n > 0) {
    let digit = n % 10
    digits.unshift(digit)
    n = Math.floor(n / 10)
  }
  if(digits.length === 0) return 0

  let sum = 0
  let prod = 1
  for(let i = 0; i < digits.length; i++) {
    let digit = digits[i]
    sum+=digit
    prod*=digit
  }

  return prod - sum
};