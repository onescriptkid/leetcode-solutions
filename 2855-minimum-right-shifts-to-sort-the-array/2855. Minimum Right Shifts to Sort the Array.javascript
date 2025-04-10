/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function(nums) {
  let pivot = undefined
  let prev = undefined
  // 0 1 2 3 4
  // 3 4 5 1 2
  //       i

  //
  // 1 2 3 0
  prev = nums[nums.length - 1]
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(prev !== undefined) {
      if(num < prev) {
        if(pivot !== undefined) return -1
        pivot = i
      }
    }
    prev = num
  }

  if(pivot === 0) return 0
  if(pivot === undefined) return 0

  return nums.length - pivot
};