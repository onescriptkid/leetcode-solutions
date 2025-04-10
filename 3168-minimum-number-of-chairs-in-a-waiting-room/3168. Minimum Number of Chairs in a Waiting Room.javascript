/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
  // ELELEEL
  // 1010121  

  let max = 0
  let curr = 0
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    if(c === 'E') {
      curr++
    }
    if(c === "L") {
      curr--
    }
    if(curr > max) {
      max = curr
    }
  }
  return max
};