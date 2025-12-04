/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // 0 1 2 3 4 5 6 7 8 
  // l       m       r

  let l = 0
  let r = x
  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = m*m
    // console.log('l m r', l, m,r,'-', mid)

    if(mid === x) {
      return m
    }
    if(mid < x) {
      // best = l
      l = m + 1
    } else {
      r = m - 1
    }
  }
  return r
    
};