/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
  let rev = 0
  let tmp = num
  while(tmp > 0) {
    let digit = tmp % 10
    rev = rev * 10 + digit
    tmp = Math.floor(tmp / 10)
  }
  // console.log('rev', rev)

  let rev2 = 0
  while(rev > 0) {
    let digit = rev % 10
    rev2 = 10 * rev2 + digit
    rev = Math.floor((rev / 10))
  }
  // console.log('rev2', rev2)

  return rev2 === num
};