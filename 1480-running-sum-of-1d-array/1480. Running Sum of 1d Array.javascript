/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

  let sum = 0
  let out = []
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    sum+=num
    out.push(sum)
  }
  return out
};