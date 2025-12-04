/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function(s, k) {

  let count = 0
  let prev
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    let n = s[i+1]

    if(c === prev) {
      count++
    } else {
      count = 1
    } 

    if(c !== n && count === k) {
      return true
    }
    prev = c
  }
  return false
};