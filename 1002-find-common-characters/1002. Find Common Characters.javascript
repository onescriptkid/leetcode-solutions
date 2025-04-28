/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  let freq = {}
  let first = words[0]
  for(let c of first) {
    freq[c] = (freq[c] || 0) + 1
  }
  // console.log('freq', freq)

  for(let word of words) {

    let freqw = {}
    for(let c of word) {
      freqw[c] = (freqw[c] || 0) + 1
    }

    // console.log('word', word, 'freqw', freqw)

    for(let char of Object.keys(freqw)) {
      let count = freqw[char]
      if(freq[char] !== undefined && freq[char] !== freqw[char]) {
        freq[char] = Math.min(freq[char], freqw[char])
      }
    }
    for(let char of Object.keys(freq)) {
      let count = freq[char]
      if(freqw[char] === undefined){
        delete freq[char]
      }
    }

  }

  let out = []
  for(let char of Object.keys(freq)) {

    let count = freq[char]
    for(let i = 0; i < count; i++) {
      out.push(char)
    }
  }
  return out
};