/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {

  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let letters = {}
  for(let i =0; i < alphabet.length; i++) {
    let c = alphabet[i]
    letters[c] = i
  }

  let word = "a"
  while(word.length < k) {
    for(let c of word) {
      let cval = letters[c]
      let nval = (cval + 1) % 26
      let nc = alphabet[nval]
      word+=nc
    }
    // console.log('word', word)
  }
  return word[k-1]
};