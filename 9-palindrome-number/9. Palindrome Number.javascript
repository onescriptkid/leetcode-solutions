/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

  let tmp = x
  let rev = 0
  while(tmp > 0) {
    let digit = tmp % 10
    rev = 10 * rev + digit
    tmp = Math.floor(tmp / 10)
  }
  return rev === x
};