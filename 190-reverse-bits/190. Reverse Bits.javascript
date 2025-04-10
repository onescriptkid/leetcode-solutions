/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  // 00101

  let out = 0
  for(let i =0; i < 32; i++) {
    let bit = n % 2
    if(bit === 1) {
      out = out + 2 **(31 - i)
    }
    // console.log('bit', bit, 'out', out.toString(2))
    n = Math.floor(n / 2)
  }
  return out
};