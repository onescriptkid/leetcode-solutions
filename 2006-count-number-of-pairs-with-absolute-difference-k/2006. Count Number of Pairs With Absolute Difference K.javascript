/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
  let out = 0
  for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++) {
      let abs = Math.abs(nums[i] - nums[j])
      if(abs === k) {
        out++
      }
    }
  }
  return out
};