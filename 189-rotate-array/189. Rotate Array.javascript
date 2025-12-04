/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length
  if(k === 0) return nums

  // 0 1 2  3 4 5 6

  // 7 6 5  4 3 2 1 k=3
  // 5 6 7  1 2 3 4

  nums.reverse()

  let l = 0
  let r = k - 1
  while(l < r) {
    let tmp = nums[l]
    nums[l] = nums[r]
    nums[r] = tmp
    l++
    r--
  }

  let l2 = k
  let r2 = nums.length - 1
  while(l2 < r2) {
    let tmp = nums[l2]
    nums[l2] = nums[r2]
    nums[r2] = tmp
    l2++
    r2--
  }

  return nums
};