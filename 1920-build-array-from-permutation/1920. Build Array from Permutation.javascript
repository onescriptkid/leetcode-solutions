/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  let out = []

  for(let i = 0; i < nums.length; i++) {
    let val = nums[nums[i]]
    out.push(val)
  }
  return out
};