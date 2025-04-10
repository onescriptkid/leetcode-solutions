/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {

  let max = undefined
  for(let sentence of sentences) {
    let words = sentence.split(' ')
    if(max === undefined) {
      max = words.length
    } else if(max < words.length) {
      max = words.length
    }
  }
  return max
};