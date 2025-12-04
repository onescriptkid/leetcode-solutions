/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

  // 1010  1011
  //    i     j

  let i = a.length - 1   
  let j = b.length - 1
  let carry = 0
  let out = ""
  let k = 0

  while(i >= 0 || j >= 0) {
    let abit = a[i] === '1' ? 1 : 0
    let bbit = b[j] === '1' ? 1 : 0

    let next = 0
    if(carry === 1) {
      if(abit === 1 && bbit === 1) {
        next = 1
        carry = 1
      } else if(abit === 1 || bbit === 1) {
        next = 0
        carry = 1
      } else {
        next = 1
        carry = 0
      }
    } else {
      if(abit === 1 && bbit === 1) {
        next = 0
        carry = 1
      } else if(abit === 1 || bbit === 1) {
        next =  1
        carry = 0
      } else {
        next = 0
        carry = 0
      }
    }

    if(next ===1) {
      out= "1" + out
    } else {
      out = "0" + out
    }
    i--
    j--
    k++
  }

  if(carry === 1) {
    out = "1" + out
  }
  return out

  // out = abc
  // 
};