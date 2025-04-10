/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
  let max
  let max2
  let min
  let min2
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(max === undefined) {
      max = num
    } else if(num > max) {
      max2 = max
      max = num
    } else if(max2 === undefined) {
      max2 = num
    } else if(num > max2) {
      max2 = num
    }

    if(min === undefined) {
      min = num
    } else if(num < min) {
      min2 = min
      min = num
    } else if(min2 === undefined) {
      min2 = num
    } else if(num < min2) {
      min2 = num
    }
  }
  return max * max2 - min * min2

};