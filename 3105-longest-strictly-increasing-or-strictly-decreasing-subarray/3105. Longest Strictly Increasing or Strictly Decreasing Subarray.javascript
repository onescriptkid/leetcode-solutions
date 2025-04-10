/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {


  let maxinc = 1;
  let prev
  let len = 1
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(prev !== undefined) {
      if(num > prev) {
        len++
      } else {
        len = 1
      }
    }
    if(len > maxinc) {
      maxinc = len
    }
    prev = num
  }

  prev = undefined
  len = 1
  let maxdec = 1;
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(prev !== undefined) {
      if(num < prev) {
        len++
      } else {
        len = 1
      }
    }
    if(len > maxdec) {
      maxdec = len
    }
    prev =num
  }
  // console.log(maxinc, maxdec)

  return Math.max(maxinc, maxdec)
};