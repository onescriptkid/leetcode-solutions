/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {

  // Iterate over multiple windows sizes
  // l r
  // l   r
  // l     r
  let min = undefined
  for (let i = l; i <= r; i++) {

    // Create window of size(i)
    let sum = 0
    let ri = 0
    let li = 0
    for (let j = 0; j < i; j++) {
      let num = nums[j]
      sum += num
      ri++
    }
    if (sum > 0) {
      if(min === undefined) {
        min = sum
      } else if(sum < min) {
        min = sum
      }
    }
    // Walk forward window
    // l  r
    //   l  r
    //     l  r
    while (ri < nums.length) {
      let lnum = nums[li]
      let rnum = nums[ri]
      li++
      ri++
      sum += rnum
      sum -= lnum
      if(sum > 0) {
        if(min === undefined) {
          min = sum
        } else if(sum < min) {
          min = sum
        }
      }
    }
  }
  if(min === undefined) return -1
  return min
};