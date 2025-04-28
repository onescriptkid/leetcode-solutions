/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  // negative marking
  // 1 3 4 2 2
  // - -
  // 0 1 2 3 4 
  // -   -
  
  // 1 3 4 2 2
  // - - - x
  // 0 1 2 3 4 
  // - x - -
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let abs = Math.abs(num)

    if(nums[abs-1] < 0) {
      return abs
    }
    nums[abs-1] = -nums[abs-1]
  }

};