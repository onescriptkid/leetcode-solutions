/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if(t.length < s.length) return false

  let j = 0
  for(let i = 0; i < t.length; i++) {
    // console.log('t[i]', t[i], 's[j]', s[j])
    let tc = t[i]
    if(t[i] === s[j]) {
      j++
    }
  }
  return j === s.length
};