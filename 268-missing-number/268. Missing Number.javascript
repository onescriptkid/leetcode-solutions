/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let xor = 0
  for(let num of nums) {
    xor = xor ^ num
  }   

  for(let i = 0; i < nums.length+1; i++) {
    xor = xor ^ i
  }
  return xor
};