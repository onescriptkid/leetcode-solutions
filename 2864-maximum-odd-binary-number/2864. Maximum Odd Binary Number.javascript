/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {

  // get odd bits.
  // get total bits
  let i = 0;
  let oddbits = 0
  while(i < s.length) {
    if(s[i] === '1') oddbits++
    i++
  }

  let str = ""
  let j = 0
  while(j < s.length) {

    if(j === s.length - 1) {
      str+='1'
    } else if(oddbits > 1) {
      oddbits--
      str+='1'
    } else {
      str+='0'
    }
    j++
  }
  return str

};