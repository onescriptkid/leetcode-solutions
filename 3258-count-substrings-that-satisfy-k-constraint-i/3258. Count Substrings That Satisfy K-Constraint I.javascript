/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function(s, k) {
  let total = 0
  for(let i = 0; i < s.length; i++) {
    let zeroes = 0
    let ones = 0
    for(let j = i; j < s.length; j++) {
      if(s[j] === "0") {
        zeroes++
      }
      if(s[j] === "1") {
        ones++
      }
      // console.log(s.substring(i, j+1), zeroes, ones, zeroes <= k && ones <= k)
      if(zeroes <= k || ones <= k) {
        total++
      }
    }
  } 
  return total
};