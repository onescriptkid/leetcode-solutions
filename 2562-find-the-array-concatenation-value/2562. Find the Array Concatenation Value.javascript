/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {

  let out = 0

  while(nums.length > 0) {
    if(nums.length === 1) {
      out+=nums[0]
      nums.pop()
    } else {
      let first = nums.shift()
      let last = nums.pop()
      let val = Number(first + "" + last)
      out+=val
    }
  }
  return out
};