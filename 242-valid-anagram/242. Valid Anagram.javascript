/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false
  let sfreq = {}
  let tfreq = {}
  for(let i = 0; i < s.length; i++) {
    let cs = s[i]
    let ct = t[i]
    sfreq[cs] = (sfreq[cs] || 0) + 1
    tfreq[ct] = (tfreq[ct] || 0) + 1
  }

  for(let c of Object.keys(sfreq)) {
    if(sfreq[c] !== tfreq[c]) {
      return false
    }
  }
  for(let c of Object.keys(tfreq)) {
    if(sfreq[c] !== tfreq[c]) {
      return false
    }
  }
  return true

};