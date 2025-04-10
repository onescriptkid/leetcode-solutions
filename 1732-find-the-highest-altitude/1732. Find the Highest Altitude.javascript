/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {

  let max = 0
  let alt = 0
  for(let g of gain) {
    alt+=g
    if(alt > max) {
      max = alt
    }
  }
  return max
};