/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {

  let max
  let index
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(max === undefined) {
      max = num
      index = i
    } else if(num > max) {
      max = num
      index = i
    }
  }

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(num !== max) {
      if((2 * num) > max) {
        return -1
      }
    }
  }
  return index
};