/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

  // 1011
  // 1010

  let i = a.length - 1
  let j = b.length - 1

  let carry = 0
  let str = ''
  while(i >= 0 || j >= 0) {
    let ad = a[i] || '0'
    let bd = b[j] || '0'

    let next = (carry + Number(ad) + Number(bd) ) % 2
    if(carry === 1) {
      if(ad === '1' || bd === '1') {
        carry = 1
      } else {
        carry = 0
      }
    } else {
      if(ad === '1' && bd === '1') {
        carry = 1
      } else {
        carry = 0
      }
    }


    str = next + str
    // console.log('str', str, 'next', next, 'ad', ad, 'bd', bd)

    i--
    j--
  }
  if(carry === 1) {
    str = "1" + str
  }
  return str

};