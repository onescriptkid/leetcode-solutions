/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {

  // bank
  // kanb
  let dc1f
  let dc2f

  let dc1s
  let dc2s
  for(let i = 0; i < s1.length; i++) {
    let c1 = s1[i]
    let c2 = s2[i]
    if(c1 === c2) continue
    if(dc1f === undefined && dc2f === undefined) {
      // b, k
      dc1f = c1
      dc2f = c2
    } else if(dc1s === undefined && dc2s === undefined) {
      dc1s = c1
      dc2s = c2
    } else {
      return false
    }
  }

  if(dc1f === dc2s && dc2f === dc1s) {
    return true
  }
  return false
    
};