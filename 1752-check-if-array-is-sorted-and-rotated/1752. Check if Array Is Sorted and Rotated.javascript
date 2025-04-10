/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {

  // 3 4 5 1 2   
  let dec = false

  // 5 6 7 1 8

  for(let i = 0; i < nums.length; i++) {
    let curr = nums[i]
    let next = nums[i+1]
    if(i === (nums.length - 1)) {
      next = nums[0]
    }

    if(dec === true) {
      if(curr > next) {
        return false
      }
    }
    if(curr > next) {
      dec = true
    }
  }
  return true
};