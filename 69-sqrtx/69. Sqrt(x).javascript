/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

  // 1 2 3 4 5 6 7 8      9 / 2 => 4
  // l     m       r
  
  // 1 2 3 4 5 6 7 8      4 / 2 => 2
  // l m r
  
  // 1 2 3 4 5 6 7 8      4 / 2 => 2
  //   m r
  //     l

  let l = 1
  let r = x

  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = x / m
    // console.log('lmr', l, m, r)


    if(mid === m) {
      return m
    }
    if(mid < m) {
      r = m - 1
    }
    if(mid > m) {
      l = m + 1
    }
  }

  return r

};