/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
  let [left, right] =  s.split(':')

  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
  let letters = {}
  for(let i = 0; i < alphabet.length; i++) {
    let c = alphabet[i]
    letters[c] = i
  }
  // A1:
  let rowStart = Number(left[1])
  let rowEnd = Number(right[1])
  let colStart = letters[left[0]]
  let colEnd = letters[right[0]]
  let out = []
  console.log('rs', rowStart, 'rowEnd', rowEnd, 'colStart', colStart, 'ColEnd', colEnd)
  for(let c = colStart; c <= colEnd; c++) {
    let col = alphabet[c]
    for (let r = rowStart; r <= rowEnd; r++) {
      let str = `${col}${r}`
      out.push(str)
    }
  }
  return out

};