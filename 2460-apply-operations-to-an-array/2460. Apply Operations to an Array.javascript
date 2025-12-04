/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
  // 1 0 2 0 0 1
  // 1 2 1 0 0 0

  // 1 2 2 1 1 0
  // 1 4 0 2 0 0

  for(let i = 0; i < nums.length - 1; i++) {
    if(nums[i] === nums[i+1]) {
      nums[i] = nums[i]*2
      nums[i+1] = 0
    }
  }

  let j = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      let tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
      j++
    }
  }

  return nums

};