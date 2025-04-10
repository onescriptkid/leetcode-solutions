/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

  // 4 0 1 0 3 12  j = 1
  //   i
  //    j
  
  // 0 0 1 3 12
  let j = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]   
    if(num !== 0) {
      let tmp = nums[i - j]
      nums[i - j] = nums[i]
      nums[i] = tmp
    } else {
      j++
    }
  }
  return nums

};