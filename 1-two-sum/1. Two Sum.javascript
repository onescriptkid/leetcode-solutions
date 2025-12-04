/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let partials = {}
  for(let i = 0; i < nums.length; i++) {
    // num[0] + num[1] === target
    // num[0] === target - num[1]

    let partial = target - nums[i]
    if(partials[nums[i]] !== undefined) {
      return [i, partials[nums[i]]]
    }

    partials[partial] = i
  }   
  return [-1,-1]
};