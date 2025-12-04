/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {

  // 3 2 5 4
  //   r
  // l
  
  // 3 2 5 4 5 4 8
  //               r
  //   l

  let l = 0
  let r = 0
  let max = 0
  while(r < nums.length) {
    let nr = nums[r]
    r++

    if(nums[l] % 2 !== 0) {
      l = r
      continue
    }
    if((r-l) >= 2 && nums[r-2] % 2 === nums[r-1] % 2) {
      r = r - 1
      l = r
      continue
    }
    if(nr > threshold) {
      l = r
      continue
    }
    let len = r - l
    if(len > max) {
      max = len
    }
  }
  return max


    
};