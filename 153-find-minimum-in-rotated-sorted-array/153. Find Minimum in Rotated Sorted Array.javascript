/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

  let l = 0
  let r = nums.length - 1
  let gmin
  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = nums[m]
    let left = nums[l]
    let right = nums[r]

    let lmin = Math.min(left, mid, right)
    if(gmin === undefined || lmin < gmin) gmin = lmin

    if(left <= mid) {
      l = m+1
    } else {
      r = m - 1
    }
  }
  return gmin
  // 4 5 6 7 0 1 2   
  // l     m     r
};