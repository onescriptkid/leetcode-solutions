/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {

  let count = 0
  let word = ""
  for(let i = 0; i < s.length; i++) {
    let c = s[i]

    if(c === ' ') {
      if(word !== '') {
        count++
      }
      word = ''
    } else {
      word+=c
    }
  }
  if(word.length > 0) {
    count++
  }
  return count

};