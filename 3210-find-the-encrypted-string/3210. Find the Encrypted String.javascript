/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {

  let out = ""
  for(let i = 0; i < s.length; i++) {
    let index = (i + k) % s.length
    let c = s[index]
    out+=c
  }
  return out
    
};