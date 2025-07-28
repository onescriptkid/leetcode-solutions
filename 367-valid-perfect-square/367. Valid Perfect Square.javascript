/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

  let l = 0
  let r = num

  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = m*m

    if(mid === num) {
      return true
    }
    if(mid < num) {
      l = m + 1
    }
    if(mid > num) {
      r = m - 1
    }
  }

  return false

};