/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

  let sarr = []
  for(let c of s) {
    if(c === '#') {
      sarr.pop()
    } else {
      sarr.push(c)
    }
  }

  let tarr = []
  for(let c of t) {
    if(c === '#') {
      tarr.pop()
    } else {
      tarr.push(c)
    }
  }

  if(tarr.length !== sarr.length) return false

  for(let i = 0; i < sarr.length; i++) {
    if(sarr[i] != tarr[i]) return false
  }
  return true
};