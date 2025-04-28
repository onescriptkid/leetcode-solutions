/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  //  0  1  0  3 12
  //  i
  //  j  

  //  0  1  0  3 12
  //     i
  //  j  
  //  1  0  0  3 12
  //     i
  //  j  
  //  1  0  0  3 12
  //     i
  //     j  
  
  //  1  0  0  3 12
  //        i
  //     j  

  //  1  0  0  3 12
  //           i
  //     j  

  let j = 0
  for(let i =0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      let tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
      j++
    }
  }
  return nums
};