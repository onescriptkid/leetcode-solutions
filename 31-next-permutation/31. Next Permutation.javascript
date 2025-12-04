/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  // 5  7 6 4   
  
  // 5  7 6 4   
  // p
  
  // 5  7 6 4   
  // p      i
  
  // 5  7 6 4   
  // p    i
  
  // 6  7 5 4   
  // p    i
  
  // 6  4 5 7   
  // p    

  // 3  6 4 2
  //      c p

  let pivot

  for(let i = nums.length - 2; i >= 0; i--) {
    let curr = nums[i]
    let prev = nums[i+1]

    if(curr < prev) {
      pivot = i
      break;
    }
  }

  // 1 2 3    p
  //   p
  
  // 1 2 3    
  //   p

  if (pivot !== undefined) {
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[pivot] < nums[i]) {
        let tmp = nums[pivot]
        nums[pivot] = nums[i]
        nums[i] = tmp
        break;
      }
    }

    reverse(pivot+1)
  } else {
    reverse(0)
  }

  function reverse(start) {
    let l = start
    let r = nums.length - 1
    while(l < r) {
      let tmp = nums[l]
      nums[l] = nums[r]
      nums[r] = tmp
      l++
      r--
    }
  }
  return nums
};