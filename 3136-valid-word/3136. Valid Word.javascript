/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
  if(word.length < 3) return false

  word = word.toLowerCase()
  let alphanumeric = new Set('abcdefghijklmnopqrstuvwxyz0123456789')
  let consonants = new Set('bcdfghjklmnpqrstvwxyz')
  let vowels = new Set('aeiou')
  let hasVowel = false
  let hasConsonant = false
  for(let i = 0; i < word.length; i++) {
    let c = word[i]
    if(!alphanumeric.has(c)) {
      return false
    }
    if(vowels.has(c)) {
      hasVowel = true
    }
    if(consonants.has(c)) {
      hasConsonant = true
    }
  }
  if(!hasVowel) return false
  if(!hasConsonant) return false
  return true
};