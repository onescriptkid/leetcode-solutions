/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
  if(n <= 0) return false

  // 14 => 2 * 7
  // 30 => 5 * 2 * 3
  // 22 => 2 * 11

  let factors = [2,3,5]
  let i = 0
  while(n > 1) {
    let factor = factors[i]
    if(factor === undefined) return false
    if(n % factor === 0) {
      n = n / factor
    } else {
      i++
    }
  }

  return true

  // let i = 2
  // while(n > 1) {
  //   if(i === 2 || i === 3 || i === 5) {

  //   }
  //   if(n % i === 0)
  // }


};