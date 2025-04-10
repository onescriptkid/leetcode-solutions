/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {

  let count = 0
  for(let word of words) {

    let hasPrefix = true
    for(let i = 0; i < pref.length; i++) {
      let cw = word[i]
      let cp = pref[i]
      if(cw !== cp) {
        hasPrefix = false
        break
      }
    }
    if(hasPrefix) {
      count++
    }

  }

  return count
};