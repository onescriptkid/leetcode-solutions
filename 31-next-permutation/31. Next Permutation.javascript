/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

  // 6  8 7 5 4   
  // p
  // c  p
  
  // 6  8 7 5 4   
  // p    i
  
  // 7  8 6 5 4   
  // p    i
  
  // 7  4 5 6 8
  // p    i

  let pi
  for(let i = nums.length - 2; i >= 0; i--) {
    let curr = nums[i]
    let prev = nums[i+1]

    if(curr < prev) {
      pi = i
      break
    }
  }

  if(pi !== undefined) {
    for(let i = nums.length - 1; i >= 0; i--) {
      if(nums[pi] < nums[i]) {
        let tmp = nums[pi]
        nums[pi] = nums[i]
        nums[i] = tmp
        break
      }
    }

    reverse(pi+1)
  } else {
    reverse(0)
  }

  function reverse(s) {
    let l = s
    let r = nums.length - 1

    while(l < r) {
      let tmp = nums[l]
      nums[l] = nums[r]
      nums[r] = tmp
      l++
      r--
    }
  }
};