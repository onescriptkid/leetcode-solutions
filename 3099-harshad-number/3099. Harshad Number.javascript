/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
  let sum = 0
  let orig = x
  while(x > 0) {
    let digit = x % 10

    sum+=digit
    x = Math.floor(x / 10)
  }
  if(orig % sum === 0) return sum
  return -1
};