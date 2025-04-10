/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {

  let negs = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(num === 0) {
      return 0
    }
    if(num < 0) {
      negs++
    }
  }
  if (negs % 2 === 1) {
    return -1
  }
  return 1
};