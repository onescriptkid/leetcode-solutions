/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {

  nums.sort((a,b) => a > b ? 1: -1)
  let out = []
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(target === num) {
      out.push(i)
    }
  }
  return out
};