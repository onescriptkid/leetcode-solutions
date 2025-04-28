/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if(num === 0) return "0"
  //        
  let hex = '0123456789abcdef'

  if(num >= 0) {
    let out = ""
    let tmp = num
    // 26 % 16 => 10 (a)
    // 26 / 16 =>  1

    while(tmp > 0) {
      let digit = tmp % 16 
      let hdigit = hex[digit]

      out = hdigit + out
      tmp = Math.floor(tmp / 16)
    }
    return out
  } else {
    let out = ""
    let tmp = 2 ** 32 + num
    // 26 % 16 => 10 (a)
    // 26 / 16 =>  1

    while(tmp > 0) {
      let digit = tmp % 16 
      let hdigit = hex[digit]

      out = hdigit + out
      tmp = Math.floor(tmp / 16)
    }
    return out   
  }
};