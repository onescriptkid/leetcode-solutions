/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let l = 0
  let r = x

  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = m*m

    if(mid === x) {
      return m
    }
    if(mid < x) {
      l = m + 1
    }
    if(mid > x) {
      r = m - 1
    }
  }
  return r
};