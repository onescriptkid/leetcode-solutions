/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  //      2  3 -2  4
  // min  2  3 -12 -48
  // max  2  6 -2  4

  let min
  let max
  let gmax
  for(let num of nums) {
    if(min === undefined) {
      min = num
      max = num
      gmax = num
      continue
    }

    let opts = [min*num, max*num, num]

    min = Math.min(...opts)
    max = Math.max(...opts)
    gmax = Math.max(gmax, max)
  }
  return gmax
};