/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let p
  let max
  let count = 0

  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if(p !== undefined) {
      if(p === c) {
        count++
      } else {
        count = 1
      }
      if(count > max) {
        max = count
      }
    } else {
      count = 1
      max = 1
    }
    p = c
  }   

  return max
};