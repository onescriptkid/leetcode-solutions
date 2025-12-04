/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let l = 0
  let r = nums.length - 1

  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = nums[m]
    let n0 = nums[m-1] ?? -Infinity
    let n1 = nums[m+1] ?? -Infinity

    if(n0 < mid && mid > n1) {
      return m
    } else if(n0 < mid && mid < n1) {
      l = m + 1
    } else if(n0 > mid && mid > n1) {
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return -1
};