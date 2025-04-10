/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {

  let str1 = ""
  for(let w of word1) {
    str1+=w
  }

  let str2 = ""
  for(let w of word2) {
    str2+=w
  }
  return str2 === str1
  
};