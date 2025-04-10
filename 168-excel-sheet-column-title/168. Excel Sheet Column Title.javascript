/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  // ABC
  // A             B             C
  // 1 * 26 ** 2 + 2 * 26 ** 1 + 3 * 26 ** 0

  // ZY
  // 26 * 26 **1 + 25 * 26 ** 0


  // 012    3
  // ABC
  //   ^

  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let letters = {}
  alphabet = alphabet.toUpperCase()
  // for(let i = 0; i < alphabet.length; i++) {
  //   let c = alphabet[i]
  //   letters[c] = i
  // }
  // let out = 0
  // for(let i = columnNumber.length - 1; i >= 0; i-- ) {
  //   let letter = columnNumer[i]
  //   let letterval = letters[letter]
  //   let exp = columnNumber.length - i - 1
  //   console.log('letter', letter, 'letterval', letterval, 'exp', exp, 'out', out)
  //   out+= letter * 26 ** exp
  // }
  // return out
  // 28 -1 => 27 % 26 => 1
  let num = columnNumber
  let str = ""
  while(num !== 0) {
    let letterval = (num-1) % 26
    let letter = alphabet[letterval]
    str = letter + str
    // console.log('letter', letter, 'letterval', letterval, 'num', num, 'str', str)
    num = Math.floor((num -1) / 26)
  }

  return str
};