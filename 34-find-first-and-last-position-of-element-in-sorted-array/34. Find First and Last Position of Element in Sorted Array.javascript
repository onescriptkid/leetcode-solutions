/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  // 0 1 2 3 4 5

  // 5 7 7 8 8 10   t=8
  // l   m     r

  let l = 0
  let r = nums.length - 1 
  let min
  // 5 7 8 8 8 8 8 8 9   t=8
  // l       m       r

  // 0 1

  // 2 2
  // l
  //   r
  // m

  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = nums[m]

    if(mid === target) {
      min = m
      r = m - 1
    }
    if(mid < target) {
      l = m + 1
    } else if(mid > target) {
      r = m - 1
    }
  }

  if(min=== undefined) return [-1,-1]

  l = 0
  r = nums.length - 1
  let max
  let i = 0
  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = nums[m]

    if(mid === target) {
      max = m
      l = m + 1
    }
    if(mid < target) {
      l = m + 1
    } else if(mid > target) {
      r = m - 1
    }
  }

  return [min, max]


};