/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  //      2 3 -2  4   
  // min  2 3 -12 -48
  // max  2 6 -2  4

  let min
  let max
  let gmax
  for(let num of nums) {
    if(gmax === undefined) {
      min = num
      max = num
      gmax = num
      continue
    }

    let opt1 = num * min
    let opt2 = num * max
    let opt3 = num

    min = Math.min(opt1, opt2, opt3)
    max = Math.max(opt1, opt2, opt3)

    gmax = Math.max(gmax, max)
  }
  return gmax
};