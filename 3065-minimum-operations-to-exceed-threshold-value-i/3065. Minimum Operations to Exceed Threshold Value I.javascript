/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  nums = nums.sort((a,b) => a > b ? 1 : -1)   
  // 1 2 3 10 11
  // i
  let ops = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(num < k) {
      ops++

    } else {
      break;
    }
  }
  return ops
};