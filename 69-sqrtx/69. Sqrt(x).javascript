/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

  let l = 0
  let r = x

  // 0 1 2 3 4 5 6 7 8    => 9
  // l       m       r
  
  // 0 1 2 3 4 5 6 7 8    =>    m = 1
  // l m   r
  
  // 0 1 2 3 4 5 6 7 8    =>    m = 1
  //     l r
  //     m

  while(l <= r)  {
    let m = Math.floor((l + r) / 2)
    let mid = m * m

    if(mid === x) {
      return m
    }
    if(mid > x) {
      r = m - 1
    }
    if(mid < x) {
      l = m + 1
    }
  }
  return r

};