/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {


  let out = []
  let carry = 1
  let i = digits.length - 1
  while(i >= 0) {
    let digit = digits[i]

    let sum = carry + digit
    let nextdigit = sum % 10
    // console.log('i', i, 'nextdigit', nextdigit,)
    if(sum >= 10) {
      carry = 1
    } else {
      carry = 0
    }

    out.unshift(nextdigit)
    i--
  }
  if(carry === 1) {
    out.unshift(1)
  }
  return out

};