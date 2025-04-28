/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {

  let count = 0
  let out = ''
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    if(c === ' ') {
      count++
    }
    if(count === k) {
      return out
    }
    out+=c
  }
  return out
};