/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
  
  let set = new Set(nums)
  let max = undefined
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(num > 0 && set.has(-num)) {
      if(max === undefined) {
        max = num
      } else if(num > max) {
        max = num
      }
    }
  }
  if(max === undefined) return -1
  return max
};