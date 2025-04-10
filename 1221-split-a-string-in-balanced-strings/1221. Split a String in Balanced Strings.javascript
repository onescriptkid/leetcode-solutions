/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {

  // RLRRLLRLRL
  //   
  // RL, RRLL, RLRL
  let count = 0
  let total = 0
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    if(c === 'R') {
      count++
    } else {
      count--
    }
    if(count === 0) {
      total++
    }
  }
  return total
};