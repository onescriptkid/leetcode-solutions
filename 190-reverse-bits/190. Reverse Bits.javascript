/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let out = 0
  for(let i = 0; i < 32; i++) {
    let bit = n % 2
    if(bit ===1) {
      out+=2**(31 -i) 
    }
    n = Math.floor(n / 2)
  }   
  return out
};