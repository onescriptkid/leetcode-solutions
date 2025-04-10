/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {

  let counts = {}

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(counts[num] === undefined) {
      counts[num] = 1
    } else {
      counts[num]++
    }
    if(counts[num] > 2) return false
  }

  return true 
};