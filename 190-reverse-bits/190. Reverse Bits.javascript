/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
  let out = 0
  for(let i = 0; i < 32; i++) {
    let bit = n % 2
    
    out = out + bit * 2**(31-i)

    n = Math.floor(n / 2)
  }

  return out
};