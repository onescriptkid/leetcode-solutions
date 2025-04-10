/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 2 7 11 15     9 - num
  // 7 2 -2 -6
  let partials = {}
  for(let i = 0; i < nums.length; i++) {
    let partial = target - nums[i]
    partials[partial] = i
  }

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if(partials[num] !== undefined && partials[num] !== i) {
      return [i, partials[num]]
    }
  }
};