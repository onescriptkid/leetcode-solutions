/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  //   8421
  //   1010   10
  //   1110   14
  //  11000
  let carry = 0
  let res = 0
  for(let i = 0; i < 32; i++) {
    let ad = (a >> i) & 1
    let bd = (b >> i) & 1
    let next = ad ^ bd ^ carry
    
    if(carry === 1) {
      if(ad === 1 || bd === 1) {
        carry = 1
      } else {
        carry = 0
      }
    } else {
      if(ad === 1 && bd === 1) {
        carry = 1
      } else {
        carry = 0
      }
    }

    res = res | (next << i)
    // console.log('ad', ad, 'bd', bd, 'next', next, 'carry', carry)
  }
  return res
    
};