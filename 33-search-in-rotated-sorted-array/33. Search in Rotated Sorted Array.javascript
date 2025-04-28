/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0
  let r = nums.length - 1

  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = nums[m]
    let left = nums[l]
    let right = nums[r]

    if(mid === target) {
      return m
    }

    if(left <= mid) {
      // 4 5 6 7 0 1 2
      // l     m     r

      if(target < left || target > mid) {
        l = m + 1
      } else {
        r = m - 1
      }
      
    } else {
      if(target < mid || target > right) {
        r = m - 1
      } else {
        l = m + 1
      }
    }
      // 5 6 7 0 1 2 4
      // l     m     r
  }
  return -1



};