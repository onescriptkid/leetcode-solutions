/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {

  let first = new Set("qwertyuiop")
  let second = new Set('asdfghjkl')
  let third = new Set('zxcvbnm')

  let out = []
  for(let word of words) {
    let orig = word
    word = word.toLowerCase()

    let row
    let samerow = true
    for(let c of word) {
      if(row === undefined) {
        if(first.has(c)) {
          row = 'f'
        } else if(second.has(c)) {
          row = 's'
        } else if(third.has(c)) {
          row = 't'
        }
      } else if(row === 'f') {
        if(!first.has(c)) {
          samerow = false
          break;
        }
      } else if(row === 's') {
        if(!second.has(c)) {
          samerow = false
          break;
        }
      } else if(row === 't') {
        if(!third.has(c)) {
          samerow = false
          break;
        }
      }
    }
    if(samerow) {
      out.push(orig)
    }
  }
  return out
};