/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {

  // 3**2 + 4**2   = 5**2
  // 9      16       25
  let count = 0
  for(let a = 1; a <= n; a++) {
    for(let b = 1; b <= n; b++) {
      let sum = a**2 + b**2
      let c = Math.sqrt(sum) 

      if(c === Math.floor(c) && c <= n) {
        // console.log('a', a, 'b', b, 'sum', sum, sum**0.5)
        count++
      }
    }
  }
  return count
};