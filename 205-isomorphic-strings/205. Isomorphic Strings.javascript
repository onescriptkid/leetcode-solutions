/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if(s.length !== t.length) return false

  let stot = {}
  let ttos = {}

  for(let i = 0; i < s.length; i++) {
    let sc = s[i]
    let tc = t[i]
    if(stot[sc] === undefined) {
      stot[sc] = tc
    } else {
      if(stot[sc] !== tc) return false
    }
    if(ttos[tc] === undefined) {
      ttos[tc] = sc
    } else {
      if(ttos[tc] !== sc) return false
    }
  }

  return true


};