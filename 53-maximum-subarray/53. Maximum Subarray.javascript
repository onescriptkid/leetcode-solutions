/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // -2 1 -3 4 -1 2 1 -5 4
  // -2 

  let max = nums[0]
  let sum = 0
  for(let num of nums) {
    if(sum < 0) {
      sum = num
    } else {
      sum+=num
    }


    max = Math.max(max, sum)
  }
  return max

};