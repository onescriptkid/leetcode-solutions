/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
  // 0 1 2 3 4 5
  // 1 3 2 1 5 4
  // i o
  //   i     o
  // o   i   o
  //     o i o
  //         g o
  //   o       g

  let sum = 0
  for(let i = 0; i < nums.length; i++) {
    let left = nums[i-k] || 0
    let right = nums[i+k] || 0

    if(nums[i] > left && nums[i] > right) {
      sum+=nums[i]
    }
  }
  return sum

};