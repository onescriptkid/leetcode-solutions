/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
  let words = sentence.split(' ')

  for(let i = 0; i < words.length; i++) {
    let word = words[i]
    if(i === (words.length - 1)) {
      if(words[i][word.length - 1] !== words[0][0]) {
        // console.log('  words', words[i])
        return false
      }
    } else {
      if(words[i][word.length - 1] !== words[i+1][0]) {
        // console.log('  words', words[i])
        return false
      }
    }


  }
  return true

};