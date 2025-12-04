/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let steps = 0
  let l = 0
  let r = 0
  while(r < nums.length - 1) {
    let farthest = r
    for(let i = l; i <= r; i++) {
      farthest = Math.max(farthest, i + nums[i])
    }
    steps++
    l = r + 1
    r = farthest
  }
  return steps
};