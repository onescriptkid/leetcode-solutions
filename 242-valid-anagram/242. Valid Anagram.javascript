/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let ltov = {}
  for(let i = 0; i < alphabet.length; i++) {
    ltov[alphabet[i]] = i
  }

  let sfreq = new Array(26).fill(0)
  for(let c of s) {
    sfreq[ltov[c]]++
  }
 
  let tfreq = new Array(26).fill(0)
  for(let c of t) {
    tfreq[ltov[c]]++
  }

  for(let i = 0; i < 26; i++) {
    if(sfreq[i] !== tfreq[i]) return false
  }
  return true



};