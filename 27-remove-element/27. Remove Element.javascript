/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

  // 3 2 2 3   
  // i
  // j
  
  // 3 2 2 3   
  //   i
  // j
  
  // 2 2 3 3   
  //       i
  //     j

  let j = 0
  for(let i = 0; i < nums.length; i++) {
    nums[j] = nums[i]
    if(nums[i] !== val) {
      j++
    }
  } 

  return j
};