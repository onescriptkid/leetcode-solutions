/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {

  let max;
  let max2;
  for (let i = 0; i < s.length; i++) {
    let c = Number(s[i])
    if(!Number.isNaN(c)) {
      if(max === c) continue
      if(max === undefined) {
        max = c
      } else if(c > max) {
        max2 = max
        max = c
      } else if(max2 === undefined) {
        max2 = c 
      } else if(c > max2) {
        max2 = c
      }
    }
  } 

  if(max2 === undefined) return -1
  return max2
};