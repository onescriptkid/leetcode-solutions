/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  let words = sentence.split(' ')

  for(let i = 0; i < words.length; i++) {
    let word = words[i]

    if(word.indexOf(searchWord) === 0) {
      return i + 1
    }
  }
  return -1
};