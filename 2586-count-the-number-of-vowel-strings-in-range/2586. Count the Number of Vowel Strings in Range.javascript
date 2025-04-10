/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {

  let set = new Set('aeiou')

  let out = 0
  for(let i = left; i <= right; i++) {
    let word = words[i]
    if(set.has(word[0]) && set.has(word[word.length - 1])) {
      out++
    }
  }
  return out
};