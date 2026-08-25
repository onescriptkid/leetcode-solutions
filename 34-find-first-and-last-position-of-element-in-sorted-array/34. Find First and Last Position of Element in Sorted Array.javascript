/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let hi = -1
  let l = 0
  let r = nums.length - 1   

  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = nums[m]

    if(mid === target) {
      hi = m
      l = m + 1
    }
    if(mid < target) {
      l = m + 1
    }
    if(mid > target) {
      r = m -1
    }
  }
  if(hi === -1) return [-1,-1]
  let lo = -1
  l = 0
  r = nums.length - 1

  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = nums[m]

    if(mid === target) {
      lo = m
      r = m -1
    }
    if(mid < target) {
      l = m + 1
    }
    if(mid > target) {
      r = m - 1
    }
  }
  return [lo, hi]
};