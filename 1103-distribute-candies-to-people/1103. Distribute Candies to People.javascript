/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {


  let out = new Array(num_people).fill(0)
  let i = 0
  let left = candies
  while(left > 0) {
    // console.log(out)
    let candy = i+1 
    if((left - candy) < 0) {
      candy = left
    }
    out[i % num_people]+=candy
    i++
    left = left - candy
  }
  return out
};