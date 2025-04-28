/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if(s.length > t.length) return false

  let i = 0
  for(let j = 0; j < t.length;j++) {
    let c = t[j]
    if(c === s[i]) {
      i++
    }

    if(i === s.length) return true
  }
  return i === s.length
};