/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

  let max
  for(let candy of candies) {
    if(max === undefined) {
      max = candy
    } else if(candy > max) {
      max = candy
    }
  }

  let out = []
  for(let candy of candies) {
    let total = candy + extraCandies
    if(total >= max) {
      out.push(true)
    } else {
      out.push(false)
    }
  }
  return out
};