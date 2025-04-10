/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {

  // ZY
  // z             Y
  // 26 * 26 **1 + 25 * 26 ** 0

  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  alphabet = alphabet.toUpperCase()
  //              01234567
  let letters = {}
  for(let i = 0; i < alphabet.length; i++) {
    let c = alphabet[i]
    letters[c] = i
  }

  // ZY
  //  i
  let out = 0
  // console.log('letters', letters)
  for(let i = columnTitle.length -1; i >= 0; i--) {
    let exp = columnTitle.length - 1 - i
    let c = columnTitle[i]
    let letterval = letters[c] + 1
    // console.log('c', c, 'exp', exp, 'letterval', letterval, 'out', out)
    out+=  letterval * (26 ** exp)
  }
  return out


};