/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {

  //  let odds = 0

  //  for(let i = low; i <= high; i++) {
  //   if(i % 2 === 1) {
  //     odds++
  //   }
  //  } 
  //  return odds
  let hasOdd = false
  if(low % 2 === 1) {
    hasOdd = true
    // out++
  }
  if(high % 2 === 1) {
    hasOdd = true
    // out++
  }
  // 3 7 => 3 5 7  2
  // 3 8 => 3 5 7  2.5
  // 2 8 => 3 5 7  3
  if(hasOdd) {
    return Math.floor((high - low) / 2) + 1
  } else {
    return Math.floor(((high - low) / 2))
  }

    // (high - low) / 2
};