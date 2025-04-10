/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {

  // 3 2 5 4
  //   2 1 r
  //   l
  
  // 3 2 5 4 5 4 4
  //           2 1 r
  //   l

  let l = 0
  let max = 0
  let r = 0
  while(r < nums.length) {
    let nr = nums[r]
    r++

    // l even
    if(nums[l] % 2 === 1) {
      l = r
      continue
    }

    // oscillate
    if((r -l) >= 2 && nums[r-2] % 2 === nums[r-1] % 2) {
      r = r - 1
      l = r
      continue
    }

    // threshold
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