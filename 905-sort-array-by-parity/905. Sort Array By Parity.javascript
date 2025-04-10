/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {

  // 3 1 2 4
  //       i
  // j

  let j = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(num % 2 === 0) {
      let tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
      j++ 
    }
  }
  return nums

};