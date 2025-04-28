/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  let sum = 0
  let max = nums[0]
  let prev
  for(let num of nums) {
    if(prev !== undefined) {
      if(prev >= num) {
        sum = num
      } else {
        sum+=num
      }
    } else {
      sum = num
    }
    if(sum > max) {
      max = sum
    }

    prev = num
  }   
  return max
};