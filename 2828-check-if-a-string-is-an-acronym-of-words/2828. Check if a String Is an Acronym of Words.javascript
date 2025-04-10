/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
  if(words.length !== s.length) return false


  for(let i = 0; i < words.length; i++) {
    let word = words[i]
    let c = s[i]

    if(word[0] !== c) {
      return false
    }
  } 
  return true

};