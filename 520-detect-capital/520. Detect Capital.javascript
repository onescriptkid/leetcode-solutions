/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {

  let allCaps = true
  for(let c of word) {
    if(c !== c.toUpperCase()) {
      allCaps = false
      break;
    }
  }

  let allLower = true
  for(let c of word) {
    if(c !== c.toLowerCase()) {
      allLower = false
      break;
    }
  }

  let onlyFirst = word[0] === word[0].toUpperCase()
  if(onlyFirst) {
    for(let i = 1; i < word.length; i++) {
      let c = word[i]
      if(c === c.toUpperCase()) {
        onlyFirst = false
        break;
      }
    }
  }
  // console.log(allCaps, allLower, onlyFirst)

  return allCaps || allLower || onlyFirst


};