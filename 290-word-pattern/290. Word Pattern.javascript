/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  let ptos = new Map()
  let stop = new Map()

  let words = s.split(' ')
  if(words.length !== pattern.length) return false

  for(let i = 0; i < words.length; i++) {
    let word = words[i]
    let p = pattern[i]

    if(ptos.get(p) !== undefined) {
      if(ptos.get(p) !== word) return false
    } else {
      ptos.set(p, word)
    }

    if(stop.get(word) !== undefined) {
      if(stop.get(word) !== p) return false
    } else {
      stop.set(word, p)
    }
  }

  return true
 

};