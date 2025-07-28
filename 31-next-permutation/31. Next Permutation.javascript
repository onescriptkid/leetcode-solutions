/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  // 1 1 1  5  8 6 4    
  //             c p
  
  // 1 1 1  5  8 6 4    
  //        pi p  

  // 1 1 1  5  8 6 4    
  //        pi   c 
  
  // 1 1 1  6  8 5 4    
  //        pi   c 
  
  // 1 1 1  6  4 5 8    
  //        pi   c 
  let pivot
  for(let i = nums.length - 2; i >= 0; i--) {
    let curr = nums[i]
    let prev = nums[i+1]
    if(curr < prev) {
      pivot = i
      break;
    }
  }

  if(pivot !== undefined) {
    for(let i = nums.length - 1; i >= 0; i--) {
      let curr = nums[i]
      if(curr > nums[pivot]) {
        let tmp = nums[i]
        nums[i] = nums[pivot]
        nums[pivot] = tmp
        break;
      }    
    }
    reverse(pivot+1)
  } else {
    reverse(0)
  }

  function reverse(l) {
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