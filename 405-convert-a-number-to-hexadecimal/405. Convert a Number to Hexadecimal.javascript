/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if(num === 0) return "0"
  if(num < 0) num = 2 **32 + num
  let letters = "0123456789abcdef"
  // let lmap = {}
  // for(let i = 0; i < letters.length; i++) {
  //   let letter = letters[i]
  //   lmap[letter] = i
  // }

  let tmp = num
  let str = ""
  while(tmp > 0) {
    let digit = tmp % 16
    let letter = letters[digit]
    str = letter + str
    tmp = Math.floor(tmp / 16)
  } 
  return str
};