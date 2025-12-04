/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {

  let digitsum = 0
  let tmp = x
  while(tmp > 0) {
    let digit = tmp % 10
    digitsum+=digit

    tmp = Math.floor(tmp / 10)
  }
  if(x % digitsum === 0) return digitsum

  return -1
};