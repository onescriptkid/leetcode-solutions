/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

  let l = 0
  let r = num

  // 1 2 3 4 5 6 7 8 9
  // l               r

  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = m * m

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