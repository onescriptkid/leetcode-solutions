/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

  let smap = {}
  let tmap = {}

  for(let i = 0; i < s.length; i++) {
    let cs = s[i]
    let ct = t[i]
    if(smap[cs] === undefined && tmap[ct] === undefined) {
      smap[cs] = ct
      tmap[ct] = cs
    } else if(smap[cs] !== undefined && tmap[ct] !== undefined) {
      if(smap[cs] !== ct) return false
      if(tmap[ct] !== cs) return false
    } else {
      return false
    }
  }

  return true

    // egg   add 
    // 
};