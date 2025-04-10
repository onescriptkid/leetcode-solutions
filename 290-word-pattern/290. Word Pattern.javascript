/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {

  let pmap = new Map()
  let smap = new Map()

  let words = s.split(' ')
  if(words.length !== pattern.length) return false

  for(let i = 0; i < pattern.length; i++) {
    let word = words[i]
    let p = pattern[i]
    if(pmap.get(p) === undefined) {
      pmap.set(p, word)
    } else if(pmap.get(p) !== word) {
      return false
    }

    if(smap.get(word) === undefined) {
      smap.set(word, p)
    } else if(smap.get(word) !== p) {
      return false
    }
  }
  return true

};