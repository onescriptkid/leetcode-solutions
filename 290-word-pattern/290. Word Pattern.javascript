/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  let pmap = new Map()
  let wmap = new Map()

  let words = s.split(' ')


  if(words.length !== pattern.length) return false

  for(let i = 0; i < pattern.length; i++) {
    let word = words[i]
    let c = pattern[i]

    if(pmap.get(c) === undefined && wmap.get(word) === undefined) {
      pmap.set(c, word)
      wmap.set(word, c)
    } else if(pmap.get(c) !== undefined && wmap.get(word) !== undefined) {
      if(pmap.get(c) !== word) return false
      if(wmap.get(word) !== c) return false
    } else {
      return false
    }
  }
  return true
 

};