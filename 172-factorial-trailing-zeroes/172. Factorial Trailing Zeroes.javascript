/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let fives = 0
  for(let i = 1; i <= n; i++) {
    let tmp = i
    while(tmp % 5 === 0) {
      fives++
      tmp = tmp / 5
    }
  }
  return fives
  

};