/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    

  let prev
  let sum = 0
  let max
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(prev !== undefined) {
      if(num <= prev) {
        sum = num
      } else {
        sum+=num
      }
    } else {
      sum = num
    }

    if(max === undefined) {
      max = sum
    } else if(sum > max) {
      max = sum
    }
    prev = num
  }
  return max
};