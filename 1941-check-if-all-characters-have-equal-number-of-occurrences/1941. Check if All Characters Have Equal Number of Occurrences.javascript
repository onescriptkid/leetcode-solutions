/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {

  let counts = {}

  for(let i = 0; i < s.length; i++) {
    let c = s[i]

    if(counts[c] === undefined) {
      counts[c] = 1
    } else {
      counts[c]++
    }
  } 

  let first
  for(let key of Object.keys(counts)) {
    let count = counts[key]
    if(first === undefined) {
      first = count
    }
    if(first !== count) {
      return false
    }
  }
  return true
};