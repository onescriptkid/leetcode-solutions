/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {


  let i = 0
  let j = 0
  let k = 0
  let out = ""

  while(i < word1.length && j < word2.length) {
    if(k % 2 === 0) {
      out+=word1[i]
      i++
    } else {
      out+=word2[j]
      j++
    }
    k++
  } 
  while(i < word1.length) {
    out+=word1[i]
    i++
  }
  while(j < word2.length) {
    out+=word2[j]
    j++
  }
  return out
};