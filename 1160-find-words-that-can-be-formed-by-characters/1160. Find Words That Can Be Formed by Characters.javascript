/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {

  let freq = {}
  for(let i = 0; i < chars.length; i++) {
    let c = chars[i]
    if(freq[c] === undefined) {
      freq[c] = 1
    } else {
      freq[c]++
    }
  }

  let sum = 0
  // console.log('freq', freq)
  for(let word of words) {

    let wordfreq = {}
    let good = true
    for(let i = 0; i < word.length; i++) {
      let c = word[i]
      if(wordfreq[c] === undefined) {
        wordfreq[c] = 1
      } else {
        wordfreq[c]++
      }
      if(freq[c] === undefined || wordfreq[c] > freq[c] ) {
        good = false
        break;
      }
    }
    // console.log('word', word, wordfreq)
    if(good) {
      sum+=word.length
    }
  }

  return sum

};