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
  let skeyarr = new Array(26).fill(0)   

  for(let c of s) {
    let val = ltov[c]
    skeyarr[val]++
  }

  let tkeyarr = new Array(26).fill(0)
  for(let c of t) {
    let val = ltov[c]
    tkeyarr[val]++
  }

  return skeyarr.join(',') === tkeyarr.join(',')



};