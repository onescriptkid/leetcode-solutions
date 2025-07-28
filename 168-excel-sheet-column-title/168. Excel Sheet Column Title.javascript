/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {

  // ABC
  // A        B           C
  // 1*26**2  2*26**1     3*26**0

  let ltov = {}
  let letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
  for(let i = 0; i < letters.length; i++) {
    ltov[letters[i]] = i + 1
  }

  let str = ''
  let cn = columnNumber
  while(cn > 0) {
    let mod = (cn-1) % 26
    let c = letters[mod]

    str= c + str
    cn = Math.floor((cn-1) / 26)
  }

  return str

  // 701 => Zy

};