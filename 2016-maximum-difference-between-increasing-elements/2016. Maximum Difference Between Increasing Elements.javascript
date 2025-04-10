/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
  let max = -1
  // 1 5 2 10
  // 1 1 1 1

  // 9 4 3 2
  // 9 4 

  let mins = []
  let min = undefined
  for(let i = 0; i < nums.length; i++) {
    let  num = nums[i]
    if(min === undefined) {
      min = nums[i]
    } else if(num < min) {
      min = nums[i]
    }
    mins.push(min) 
  }

  for(let i = 0; i < nums.length; i++) {
      let diff = nums[i] - mins[i]
      if(diff === 0) continue
      if(diff > max) {
        max = diff
      }
  }
  return max
};