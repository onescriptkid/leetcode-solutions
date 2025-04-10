/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
  let w1freq = {}
  for(let word of words1) {
    if(w1freq[word] === undefined) {
      w1freq[word] = 1
    } else {
      w1freq[word]++
    }
  }

  let w2freq = {}
  for(let word of words2) {
    if(w2freq[word] === undefined) {
      w2freq[word] = 1
    } else {
      w2freq[word]++
    }
  }

  let out = []
  for(let word of Object.keys(w1freq)) {
    if(w1freq[word] === 1 && w2freq[word] === 1) {
      out.push(word)
    }
  }
  return out.length
};