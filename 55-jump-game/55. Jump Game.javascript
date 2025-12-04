/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // 2 3 1 1 4
  //         g
  let g = nums.length - 1   
  for(let i = nums.length - 2; i >= 0; i--) {

    if(i + nums[i] >= g) g = i
  }

  return g === 0
};