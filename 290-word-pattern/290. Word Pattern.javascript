/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  let words = s.split(' ')
  if(words.length !== pattern.length) {
    return false
  }

  let ptos = new Map()
  let stop = new Map()

  for(let i = 0; i < pattern.length; i++) {

    let p = pattern[i]
    let w = words[i]

    if(ptos.get(p) === undefined) {
      ptos.set(p, w)
    } else if(ptos.get(p) !== w) {
      return false
    }
    if(stop.get(w) === undefined) {
      stop.set(w, p)
    } else if(stop.get(w) !== p) {
      return false
    }
  }

  return true

  // abba dog cat cat dog
 

};