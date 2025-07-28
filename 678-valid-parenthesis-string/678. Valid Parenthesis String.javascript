/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let min = 0
  let max = 0
  for(let c of s) {
    if(c === '(') {
      min++
      max++
    }
    if(c === '*') {
      min--
      max++
    }
    if(c === ')') {
      min--
      max--
    }
    if(max < 0) return false
    min = Math.max(min, 0)
  }   
  return min === 0
};