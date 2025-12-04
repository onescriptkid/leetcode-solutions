/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {

  let maxdiff = 0
  for(let i = 0; i < nums.length; i++) {
    let curr = nums[i]
    let next = nums[(i + 1) % nums.length]
    let diff = Math.abs(curr - next)
    maxdiff = Math.max(diff, maxdiff)
  }
  return maxdiff

};