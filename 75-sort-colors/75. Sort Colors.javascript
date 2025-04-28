/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  // j is for 0s
  // k is for 2s
  // i walks the array

  // 2 0 2 1 1 0
  // j         k   
  // i

  let i = 0
  let j = 0
  let k = nums.length - 1
  while(i <= k) {
    if(nums[i] === 2) {
      let tmp = nums[k]
      nums[k] = nums[i]
      nums[i] = tmp
      k--
    } else if(nums[i] === 0) {
      let tmp = nums[j]
      nums[j] = nums[i]
      nums[i] = tmp
      i++
      j++
    } else {
      i++
    }
  }
  return nums


};