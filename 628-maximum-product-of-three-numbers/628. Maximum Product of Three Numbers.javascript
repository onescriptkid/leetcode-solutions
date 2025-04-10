/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {

  // -3 -2 -1 0 1 2 3
  //            x y z        
  // x   y  z
  // x   y          z        
  nums.sort((a,b) => a > b ? 1 : -1)

  let opt1 = nums[nums.length - 1] * nums[nums.length -2] * nums[nums.length - 3]
  let opt2 = nums[0] * nums[1] * nums[2]
  let opt3 = nums[0] * nums[1] * nums[nums.length - 1]
  // console.log(opt1, opt2, opt3)


  return Math.max(opt1, opt2, opt3)
};