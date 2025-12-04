/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let i = 0
  let j = 0
  let k = nums.length - 1

  while(i <= k) {
    if(nums[i] === 2) {
      let tmp = nums[i]
      nums[i] = nums[k]
      nums[k] = tmp
      k--
    } else if(nums[i] === 0) {
      let tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
      i++
      j++
    } else{
      i++
    }
  }
  return nums

};