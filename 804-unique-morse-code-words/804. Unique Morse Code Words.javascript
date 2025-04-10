/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {

  let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

  let letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let ltoi = {}
  for(let i = 0; i < letters.length; i++) {
    let c = letters[i]
    ltoi[c] = i
  }

  let set = new Set()

  for(let i = 0; i < words.length ;i++) {
    let word = words[i]

    let str = ""
    for(let j = 0; j < word.length; j++) {
      let c = word[j]
      let val = ltoi[c]
      let code = morse[val]
      str+=code
    }
    set.add(str)
  }
  return set.size
};