/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {

  let single = 0
  let double = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(num < 10) {
      single+=num
    } else {
      double+=num
    }
  }
  if(single === double) return false
  return true
};