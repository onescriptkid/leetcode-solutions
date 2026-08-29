/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let gmin
  let l = 0
  let r = nums.length - 1

  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = nums[m]
    let left = nums[l]
    let right = nums[r]

    let min = Math.min(mid, left, right)
    if(gmin === undefined || gmin > min) {
      gmin = min
    }

    // 4 5 6 7 0 1 2
    // l     m     r

    if(left <= mid) {
      l = m + 1
    } else {
      r = m - 1
    }
  }   
  return gmin
};