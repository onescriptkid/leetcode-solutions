/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {

  nums.sort((a,b) => {
    if(a > b) {
      return -1
    } else {
      return 1
    }
  })

  // 10 2 1 1
  // 2 1 2   3
  // 0 1 2  
  let max = 0
  for(let i = 0; i < nums.length - 2; i++) {
    let j = i + 1
    let k = j + 1
    let t0 = (nums[i] + nums[j]) > nums[k]
    let t1 = (nums[i] + nums[k]) > nums[j]
    let t2 = (nums[j] + nums[k]) > nums[i]
    if (t0 && t1 && t2) {
      let perimeter = nums[i] + nums[j] + nums[k]
      if (max === undefined) {
        max = perimeter
      } else if (perimeter > max) {
        max = perimeter
      }

    }
  }
  return max
};