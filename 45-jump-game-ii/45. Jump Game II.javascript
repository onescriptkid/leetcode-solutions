/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

  // 2 3 1 1 4
  // i
  //   x x

  let farthest = 0   
  let end = 0
  let steps = 0

  for(let i = 0; i < nums.length; i++) {
    if(i > end) {
      steps++
      end = farthest
    }

    farthest = Math.max(farthest, i + nums[i])

  }

  return steps
};