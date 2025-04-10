/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  // 0 1 2 3 4
  // 1 0 0 0 1 0 0 1
  // p       i
  let p
  for(let i = 0; i < nums.length; i++) {

    if(p !== undefined && nums[i] === 1) {
      let dist = i - p - 1
      if(dist < k) return false 
    }

    if(nums[i] === 1) {
      p = i
    }

  }
  return true
};