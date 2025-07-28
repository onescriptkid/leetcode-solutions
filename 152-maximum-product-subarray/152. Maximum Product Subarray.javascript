/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  //     2 3 -2  4   
  // min 2 3 -12 -48
  // max 2 6 -2  4

  let gmax
  let max
  let min

  for(let num of nums) {

    if(gmax === undefined) {
      max = num
      min = num
      gmax = num
      continue
    }

    let opts = [num, num*max, num*min]

    min = Math.min(...opts)
    max = Math.max(...opts)

    gmax = Math.max(min, max, gmax)
  }
  return gmax
};