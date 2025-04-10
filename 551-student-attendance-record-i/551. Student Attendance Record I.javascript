/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {

  let a = 0
  let l = 0

  for (let i = 0; i < s.length; i++) {

    let c = s[i]
    if (c === 'A') {
      a++
      l = 0
    } else if(c === 'L') {
      l++
    } else if(c === 'P') {
      l = 0
    }
    if(l === 3) {
      return false
    }
    if(a === 2) {
      return false
    }
  }
  return true
};