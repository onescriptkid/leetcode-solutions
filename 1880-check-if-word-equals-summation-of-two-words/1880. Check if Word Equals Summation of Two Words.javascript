/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstword, secondword, targetword) {
  let letters = 'abcdefghij'
  let map = {}
  for(let i = 0; i < letters.length; i++) {
    let c = letters[i]
    map[c] = i 
  }

  let first = ""
  for(let i = 0; i < firstword.length; i++) {
    let c = firstword[i]
    let val = map[c]
    first+=val
  }   

  let second = ""
  for(let i = 0; i < secondword.length; i++) {
    let c = secondword[i]
    let val = map[c]
    second+=val
  }

  let target = ""
  for(let i = 0; i < targetword.length; i++) {
    let c = targetword[i]
    let val = map[c]
    target+=val
  }
  console.log(firstword, secondword, targetword)
  console.log(first, second, target)
  return Number(second) + Number(first) === Number(target)
};