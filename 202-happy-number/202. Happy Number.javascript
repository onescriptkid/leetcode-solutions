/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

  function digitSquares(num) {
    let ds = 0
    while(num > 0) {
      let digit = num % 10
      ds+=digit**2
      num = Math.floor(num / 10)
    }
    return ds
  }

  let visited = new Set()

  while(n > 1) {
    if(visited.has(n)) {
      return false
    }
    visited.add(n)
    let ds = digitSquares(n)
    // console.log('n', n, 'ds', ds)
    n = ds
  }

  return true


};