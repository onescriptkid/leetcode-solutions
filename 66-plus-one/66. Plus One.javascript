/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {


  // 1 2 3
  let carry = 1
  let i = digits.length - 1
  while(i >= 0) {

    let digit = (digits[i] + carry) % 10
    carry = Math.floor((digits[i] + carry) / 10)

    digits[i] = digit
    i--
  }

  if(carry === 1) {
    digits.unshift(1)
  }

  return digits
};