/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {

  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let ltov = {}
  for(let i = 0; i < alphabet.length; i++) {
    ltov[alphabet[i]] = i 
  }

  let freq = {}
  let out = 0
  for(let word of words) {
    let key = new Array(26).fill(0)

    for(let c of word) {
      let val = ltov[c]
      key[val] = 1
    }

    let keystr = key.join(',')

    // console.log('word', word, keystr, freq[keystr])
    if(freq[keystr] === undefined) {
      freq[keystr] = 1
    } else {
      out+=freq[keystr]
      freq[keystr]++
    }
  }
  return out

};