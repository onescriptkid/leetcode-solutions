/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let l = 0
  let r = nums.length - 1
  //  0 1 2 3      t = 2
  //  1 3 5 6      => (l + r) /2 => 0 + 3 / 2 => 1.5 => 1
  //  l m   r
  
  //  0 1 2 3      t = 2
  //  3 3 5 6      => (l + r) /2 => 0 + 3 / 2 => 1.5 => 1
  //  l m   r

  //  l
  //  m
  //  r


  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = nums[m]
    if(mid === target) {
      return m
    }
    if(mid < target) {
      l = m + 1
    }
    if(mid > target) {
      r = m - 1
    }
  }

  return l


    
};