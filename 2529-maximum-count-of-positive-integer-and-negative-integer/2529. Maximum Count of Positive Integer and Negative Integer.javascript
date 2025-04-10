/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {

  let neg = 0
  let pos = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(num < 0) {
      neg++
    } else if(num > 0) {
      pos++
    }
  }
  return Math.max(neg, pos)
};