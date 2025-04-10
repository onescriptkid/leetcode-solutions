/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let ops = 0
  for(let i = 1; i < nums.length; i++) {
    let prev = nums[i-1]
    let curr = nums[i]
    if(curr > prev) {
      continue
    } else {
      let add = prev - curr + 1
      ops+=add
      nums[i] = prev + 1
    }
  }   

  return ops
};