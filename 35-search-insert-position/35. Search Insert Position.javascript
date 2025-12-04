/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let l = 0
  let r = nums.length - 1
  // 0 1 2 3 4

  // 1 3 5 6 7   t=2
  // l   m   r
  
  // 1 3 5 6 7   t=2
  // l r    
  // m
  
  // 1 3 5 6 7   t=2
  //   r    
  //   l
  //   m



  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = nums[m]

    if(mid === target) {
      return m
    }
    if(mid < target) {
      l = m + 1
    } else {
      r = m - 1
    }
  }

  return l


    
};