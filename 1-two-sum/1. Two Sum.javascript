/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let partials = {}
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if(partials[num] !== undefined) {
      return [partials[num], i]
    }

    let partial = target - num
    partials[partial] = i
  }  
  return [-1,-1]
};