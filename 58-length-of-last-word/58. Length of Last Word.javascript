/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

  let count = 0
  let word = ''
  for(let i = s.length-1; i >= 0; i--) {
    let c = s[i]
    // console.log('c', c, 'word', word)
    if(c === ' ') {
      if(word.length !== 0) {
        return word.length
      }
    } else {
      word = c + word
    }
  }

  if(word.length !== 0) {
    return word.length
  }
  return 0

};