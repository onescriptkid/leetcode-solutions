/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false
  let rev = 0
  let tmp = x
  while(tmp > 0) {
    let digit = tmp % 10
    rev = rev * 10 + digit
    tmp = Math.floor(tmp / 10)
  }

  return rev === x
};