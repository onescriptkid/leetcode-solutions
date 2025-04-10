/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  // arr: 2 3 -2  4
  // max: 2 6 -2  4
  // min: 2 2 -12 -48


  let gmax
  let max
  let min

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(min === undefined || max === undefined) {
      min = num
      max = num
    } else {
      let opt1 = num
      let opt2 = num * min
      let opt3 = num * max
      min = Math.min(opt1, opt2, opt3)
      max = Math.max(opt1, opt2, opt3)
    }

    if(gmax === undefined) {
      gmax = max
    } else if(max > gmax) {
      gmax = max
    }
  }
  return gmax
};