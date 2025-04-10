/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
  
  let min;
  let max;

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(min === undefined) {
      min = num
    } else if(num < min) {
      min = num
    }
    if(max === undefined) {
      max = num
    } else if(num > max) {
      max = num
    }
  }
  let count = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(num < max && num > min) {
      count++
    }
  }
  return count
  // return 
};