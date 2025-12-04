/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {

  // 3 9 7      5
  // 19
  let sum= 0
  for(let i = 0; i < nums.length; i++) {
    sum+=nums[i]
  }   

  let i = 0;
  while(sum % k !== 0) {
    sum--
    i++
  }

  return i
};