/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
  let out = 0
  for(let pattern of patterns) {

    if(word.indexOf(pattern) !== -1) {
      out++
    }
  }
  return out
};