/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

  let l = 0
  let r = nums.length - 1

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
  //  0 1 2 3
  //  1 3 5 6  3/2 => 1.5 => 1     target = 2
  //  l     r
  
  //  0 1 2 3
  //  1 3 5 6  3/2 => 1.5 => 1     target = 2
  //    l 
  //  r

  //  0 1 2 3
  //  1 3 5 6  3/2 => 1.5 => 1     target = 4
  //    l          
  //        r


  // console.log('l, r', l, r) 
  return l

  return -1
};