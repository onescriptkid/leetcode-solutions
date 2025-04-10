/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {

  // abbcccc
  let out = 1
  for(let i = 1; i < word.length; i++) {
    let p = word[i-1]
    let c = word[i]
    if(p === c) {
      out++
    } 
  }
  return out

};