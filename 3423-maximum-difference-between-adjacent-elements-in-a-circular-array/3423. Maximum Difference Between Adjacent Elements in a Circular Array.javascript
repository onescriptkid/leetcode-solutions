/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {

  let max = undefined

  for(let i = 0; i < nums.length; i++) {
    let next = nums[i+1]
    if(next === undefined) {
      next = nums[0]
    }
    let diff = Math.abs(nums[i] - next)
    if(max === undefined) {
      max = diff
    } else if(diff > max) {
      max = diff
    }
  }
  return max
};