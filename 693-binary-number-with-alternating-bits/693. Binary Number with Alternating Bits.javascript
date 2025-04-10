/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {

  let bits = "0"
  let prev
  while( n > 0) {
    let bit = n % 2
    if(bit === prev) {
      return false
    }
    prev = bit
    n = Math.floor(n / 2)
  }
  return true

  for(let i = 1; i < bits.length; i++) {
    let c = n[i]
    let p = n[i-1]
    if(c === p) return false
  } 
  return true
};