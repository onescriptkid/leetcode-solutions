/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

  let word = ""
  for(let i = s.length - 1; i >= 0; i--) {
    let c = s[i]
    if(c === " ") {
      if(word !== "") {
        return word.length
      }
    } else {
      word = c + word
    }
  }
  return word.length


};