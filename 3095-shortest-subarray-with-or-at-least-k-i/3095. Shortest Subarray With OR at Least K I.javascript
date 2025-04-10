/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
  //      k = 2 10
  // 1 01
  // 2 10
  // 3 11


  // 2   10
  // 1   01
  // 8 1000
  let min
  for(let i = 0; i < nums.length; i++) {

    let or = 0 
    for(let j = i; j < nums.length; j++) {
      or = or | nums[j]
      let len = j - i + 1
      if (or >= k) {
        if (min === undefined) {
          min = len
        } else if(len < min) {
          min = len
        }
      }
    }
  }
  if(min === undefined) return -1
  return min

};