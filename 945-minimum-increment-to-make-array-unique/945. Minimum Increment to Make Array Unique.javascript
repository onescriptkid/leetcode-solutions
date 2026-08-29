/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {

  nums.sort((a,b) => a > b ? 1 : -1)   

  // 1 1 2 2 3 7
  //   i

  // 1 1 2 2 3 7
  let count = 0
  for(let i = 1; i < nums.length; i++) {
    let prev = nums[i-1]
    let curr = nums[i]
    if(prev >= curr) {
      let diff = prev - curr + 1

      nums[i] = nums[i] + diff
      count+=diff
    }
  }

  return count
};