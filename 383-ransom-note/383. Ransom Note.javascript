/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  
  let freq = {}
  for(let c of magazine) {
    freq[c] = (freq[c] || 0) + 1
  }

  for(let c of ransomNote) {
    if(freq[c] === undefined) {
      return false
    }
    if(freq[c] === 0) {
      return false
    }
    freq[c]--
  }
  return true

};