/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {

  let sbmap = {}
  let tbmap = {}
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    sbmap[c] = i
  }
  for(let i = 0; i < t.length; i++) {
    let c = t[i]
    tbmap[c] = i
  }

  let total = 0
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    let j = tbmap[c]
    total = total + Math.abs(i - j)
  }
  return total
};