/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {

  let count = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(num % 3 !== 0) {
      count++
    }
  }   
  return count
};