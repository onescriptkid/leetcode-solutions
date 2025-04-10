/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {

  let obj = {}
  let out = ""
  for(let i = 0; i < indices.length; i++) {
    let index = indices[i]
    obj[index] = s[i] 
  }

  for(let i = 0; i < s.length; i++) {
    let c = obj[i]
    out+=c
  }

  return out

};