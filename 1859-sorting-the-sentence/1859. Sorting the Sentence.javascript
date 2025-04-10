/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  let sentence = s.split(' ')
  let next = []
  for(let i = 0; i < sentence.length;i++) {
    let word = sentence[i]
    let index = Number(word[word.length - 1])
    next[index - 1] = word.substring(0, word.length -1)
  }    
  return next.join(' ')
};