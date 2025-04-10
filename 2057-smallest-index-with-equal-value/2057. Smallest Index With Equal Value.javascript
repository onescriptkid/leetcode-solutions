/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
  // 3 % 10 === 3, 
  // [0 1 2 3 4 5] 

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(i % 10 === num) return i
  }
  return -1
};