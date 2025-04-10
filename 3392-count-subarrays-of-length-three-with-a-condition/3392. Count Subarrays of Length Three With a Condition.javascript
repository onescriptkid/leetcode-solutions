/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {

  let count = 0
  for(let i = 1; i < nums.length - 1; i++) {
    let prev = nums[i-1]
    let curr = nums[i]
    let next = nums[i+1]
    if(prev + next === (curr / 2)) {
      count++
    }
  }
  return count
};