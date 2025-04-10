/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {

  let letters = 'abcdefghijklmnopqrstuvwxyz'
  //             0123456789
  let obj = {}
  for(let i = 0; i < letters.length; i++) {
    obj[letters[i]] = i + 1
  }

  // 1
  let out = ""
  for(let i = 0; i < s.length; i++) {
    let val = obj[s[i]]
    out+=val
  }

  // 2
  for(let j = 0; j < k; j++) {
    let sum = 0
    for(let i = 0; i < out.length; i++) {
      let val = Number(out[i])
      sum+=val
    }
    out = ""+sum
  }

  return Number(out)
};