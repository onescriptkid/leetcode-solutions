/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
   // yo|uar|e**|b|e***au|tifu|l" 
   //   |---|   |-|      |----|

  let count = 0
  let pair = false
  for(let c of s) {

    if(pair === false && c === '*') {
      count++
    }
    if(c === '|') {
      pair = !pair
    }
  }
  return count
};