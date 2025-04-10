/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {

  if(nums[0] === nums[1] && nums[1] === nums[2]) {
    return 'equilateral'
  }

  let small = nums[0]
  if(small > nums[1]) {
    small = nums[1]
  }
  if(small > nums[2]) {
    small = nums[2]
  }

  let big = nums[0]
  if(nums[1] > big) {
    big = nums[1]
  }
  if(nums[2] > big) {
    big = nums[2]
  }


  let mid = nums[0]
  if((nums[1] >= nums[0] && nums[1] <= nums[2])  || (nums[1] <= nums[0] && nums[1] >= nums[2]) ) {
    mid = nums[1]
  }
  if((nums[2] >= nums[1] && nums[2] <= nums[0])  || (nums[2] <= nums[1] && nums[2] >= nums[0]) ) {
    mid = nums[2]
  }

  // console.log(big, mid, small)
  if(big >= (mid + small)) {
    return 'none'
  }


  if(nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2]) {
    return 'isosceles'
  }

  return 'scalene'
};