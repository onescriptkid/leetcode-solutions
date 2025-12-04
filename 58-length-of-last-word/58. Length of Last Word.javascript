/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let word = ''
  for(let i = s.length - 1; i >= 0; i--) {
    let c = s[i]

    if(c === ' ') {
      if(word.length !== 0) return word.length
    } else {
      word = c + word
    }
  }

  if(word.length > 0) return word.length
  return -1

};