/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let freqr = {}
  for(let c of ransomNote) {
    freqr[c] = (freqr[c] || 0) + 1
  }

  let freqm = {}
  for(let c of magazine) {
    freqm[c] = (freqm[c] || 0) + 1
  }

  for(let c in freqr) {
    if(freqm[c] === undefined || freqm[c] < freqr[c]) return false
  }
  return true

};