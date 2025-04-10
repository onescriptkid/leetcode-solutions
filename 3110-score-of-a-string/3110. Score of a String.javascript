/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
  let total = 0
  for(let i = 0; i < s.length-1; i++) {
    let c = s[i]
    let n = s[i+1]
    let score = Math.abs(c.charCodeAt(0) - n.charCodeAt(0))
    total+=score
  } 
  return total
};