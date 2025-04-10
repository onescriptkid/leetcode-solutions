/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
  // let letters = {}
  // for(let i = 0; i < brokenletters.length; i++) {
  //   let c = brokenLetters[i]
  //   letters[c] = i 
  // }
  let set = new Set(brokenLetters.split(''))


  let words = text.split(' ')
  let count = 0
  for(let word of words) {

    let cantype = true
    for(let i = 0; i < word.length; i++) {
      let c = word[i]
      if(set.has(c)) {
        cantype = false
        break;
      }
    }
    if(cantype) {
      count++
    }
  }
  return count

};