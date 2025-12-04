/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max

  let sum = 0

  for(let num of nums) {
    if(sum < 0) {
      sum = num
    } else {
      sum+=num
    }

    if(max === undefined || sum > max) {
      max = sum
    }
  }
  return max
};