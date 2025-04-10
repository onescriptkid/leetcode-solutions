/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

  let i = a.length - 1
  let j = b.length - 1
  let carry = 0
  let str = ""
  while(i >= 0 || j >= 0) {
    let da = a[i] || "0"
    let db = b[j] || "0"

    let next;
    if(carry === 0) {
      if(da === "1" && db === "1") {
        next = 0
        carry = 1
      } else if(da === "1" || db === "1") {
        next = 1
        carry = 0
      } else {
        next = 0
        carry = 0
      }
    } else {
      if(da === "1" && db === "1") {
        next = 1
        carry = 1
      } else if(da === "1" || db === "1") {
        next = 0
        carry = 1
      } else {
        next = 1
        carry = 0
      }
    }
    str = next + str
    // console.log('da', da, 'db', db, 'next', next, 'carry', carry, 'str', str)
    i--
    j--
  }
  if(carry === 1) {
    str = 1 + str
  }
  return str

};