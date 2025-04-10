/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {

  let left = []
  let lmin
  for(let i = 0; i < nums.length; i++) {
    left.push(lmin)
    if(lmin === undefined) {
      lmin = nums[i]
    } else if(nums[i] < lmin) {
      lmin = nums[i]
    }
  }   

  let right = []
  let rmin
  for(let j = nums.length - 1; j >= 0; j--) {
    right.unshift(rmin)
    let num = nums[j]
    if(rmin === undefined) {
      rmin = num
    } else if(num< rmin) {
      rmin = num
    }
  }
  // console.log(nums)
  // console.log(left)
  // console.log(right) 
  let min
  for(let i = 0; i < nums.length; i++) {
    let l = left[i]
    let m = nums[i]
    let r = right[i]
    // console.log(l, m, r, min)
    if(l === undefined || r === undefined) continue
    if(l < m && r < m) {
      if(min === undefined) {
        min = l + m + r
      } else {
        min = Math.min(min, l + m + r)
      }
    }
  }
  // console.log(min)
  if(min === undefined) return -1
  return min 
};