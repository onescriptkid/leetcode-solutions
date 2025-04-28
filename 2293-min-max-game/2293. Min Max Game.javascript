/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
  
  while(nums.length > 1) {

    let next = new Array(nums.length / 2)

    for(let i = 0; i < next.length; i++) {
      if(i % 2 === 0) {
        next[i] = Math.min(nums[2*i], nums[2*i+1])
      } else {
        next[i] = Math.max(nums[2*i], nums[2*i+1])
      }
    }
    nums = next
  }
  return nums[0]
};