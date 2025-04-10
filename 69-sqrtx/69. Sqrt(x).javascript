/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // for(let i = 0; i <= x; i++) {
  //   if((i*i) === x) {
  //     return i
  //   }
  //   // if((i * (i-1) ))
  //   if((i *i) > x) {
  //     return i - 1
  //   }
  // }
  // 1 .... 4
  let l = 0
  let r = x
  let m = Math.floor((l + r) / 2)

  while(l <= r) {
    m = Math.floor((l + r) / 2)
    // console.log(l, m, r)
    let mid = m * m
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
  // console.log(l, m, r)
  if(r < l) {
    return r
  } else {
    return l
  }
  // return m
};