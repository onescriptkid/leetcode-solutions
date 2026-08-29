/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  
  let visited = new Set()
  while(n !== 1) {
    if(visited.has(n)) return false 
    visited.add(n)

    let ds = digitsum(n)

    n = ds
  }
  return true

  function digitsum(n) {
    let sum = 0
    while(n !== 0) {
      let digit = n % 10
      sum+=digit**2
      n = Math.floor(n/ 10)
    }
    return sum
  }
  return sum
};