/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {

  let bits = 0
  while(n > 0) {
    let bit = n % 2
    if(bit === 1) bits++
    n = Math.floor(n / 2)
  }
  return bits

};