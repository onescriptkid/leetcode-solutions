/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let freqs = {}
  let freqt = {}

  for(let c of s) {
    freqs[c] = (freqs[c] || 0) + 1
  }   
  for(let c of t) {
    freqt[c] = (freqt[c] || 0) + 1
  }

  for(let c of s) {
    if(freqt[c] !== freqs[c]) return false
  }
  for(let c of t) {
    if(freqt[c] !== freqs[c]) return false
  }

  return true
};