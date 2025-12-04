/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {

  //   101   5   
  //    11   3
  //  1000   8

  let carry = 0
  let out = 0
  for(let i = 0; i < 32; i++) {
    let abit = (a >> i) & 1
    let bbit = (b >> i) & 1

    let next = abit ^ bbit ^ carry

    if(carry === 1) {
      if(abit === 1 || bbit === 1) {
        carry = 1
      } else {
        carry = 0
      }
    } else {
      if(abit === 1 && bbit === 1) {
        carry = 1
      } else {
        carry = 0
      }
    }

    out = out | (next << i)
  }
  return out
};