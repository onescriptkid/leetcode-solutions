/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let sout = []
  for(let c of s) {
    if(c === '#') {
      sout.pop()
    } else {
      sout.push(c)
    }
  }   

  let tout = []
  for(let c of t) {
    if(c === '#') {
      tout.pop()
    } else {
      tout.push(c)
    }
  }

  return sout.join('') === tout.join('')
};