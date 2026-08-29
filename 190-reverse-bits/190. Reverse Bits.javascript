/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
  let rev = 0

  for(let i = 0; i < 32; i++) {
    let bit = (n >> i) & 1
    let rbit = bit << (31-i)

    rev = rev | rbit
  }   
  return rev
};