/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {

  for(let i = 1; i <= k; i++) {
    let min = undefined
    let minIndex
    for(let j = 0; j < nums.length; j++) {
      let num = nums[j]
      if(min === undefined) {
        min = num
        minIndex = j
      } else if(num < min) {
        min = num
        minIndex = j
      }
    }
    nums[minIndex] = nums[minIndex] * multiplier 
  }    
  return nums
};