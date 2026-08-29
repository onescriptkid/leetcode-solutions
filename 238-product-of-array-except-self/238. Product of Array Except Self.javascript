/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {


  // 1 2 3 4   

  // 1 1 2 6

  let out = new Array(nums.length).fill(1)
  let left = 1
  for(let i = 0; i < nums.length; i++) {
    out[i] = left * out[i]
    left = left * nums[i]
  }

  let right = 1
  for(let i = nums.length - 1; i >= 0; i--) {
    out[i] = right * out[i]
    right = right * nums[i]
  }

  return out
};