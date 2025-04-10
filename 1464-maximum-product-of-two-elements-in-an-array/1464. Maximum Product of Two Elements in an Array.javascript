/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max1
  let max2
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(max1 === undefined) {
      max1 = num
    } else if(num > max1) {
      max2 = max1
      max1 = num
    } else if(max2 === undefined) {
      max2 = num
    } else if(num > max2) {
      max2 = num
    }
  }   
  return (max1 - 1) * (max2 - 1)
};