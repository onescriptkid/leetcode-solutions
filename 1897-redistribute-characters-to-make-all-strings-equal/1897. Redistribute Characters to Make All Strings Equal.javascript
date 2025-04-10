/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {

  let counts = {}

  for(let word of words) {
    for(let i = 0; i < word.length; i++) {
      let c = word[i]
      if(counts[c] === undefined) {
        counts[c] =1
      } else {
        counts[c]++
      }
    }
  }   

  for(let key of Object.keys(counts)) {
    let count = counts[key]
    if(count / words.length !== Math.floor(count / words.length)) {
      return false
    }
  }
  return true

};