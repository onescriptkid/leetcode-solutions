/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {

  let tfreq = {}
  for(let c of t) {
    if(tfreq[c] === undefined) {
      tfreq[c] = 1
    } else {
      tfreq[c]++
    }
  }

  let sfreq = {}
  for(let c of s) {
    if(sfreq[c] === undefined) {
      sfreq[c] = 1
    } else {
      sfreq[c]++
    }
  }

  for(let c of Object.keys(tfreq)) {
    if(tfreq[c] !== sfreq[c]) return c
  }
};