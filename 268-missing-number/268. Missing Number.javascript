/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
  let xor = 0
  for(let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i]
  }

  for(let i = 0; i <= nums.length; i++) {
    xor = xor ^ i
  }
  return xor
};