/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
  let count = 0
  for(let i = 0; i < words.length; i++) {
    let word = words[i]

    if(word === s.substring(0, word.length)) {
      count++
    }
  }
  return count
};