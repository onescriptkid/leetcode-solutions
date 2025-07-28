/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {

  // 3 2 1 2 1 7

  // 1 1 2 2 3 7
  //   i c
  
  // 1 2 2 2 3 7
  //   i c
  
  // 1 2 3 2 3 7
  //     i c
  
  // 1 2 3 4 3 7
  //       i c

  nums.sort((a,b) => a > b ? 1 : -1)
  let count = 0

  for(let i = 1; i < nums.length; i++) {
    let prev = nums[i-1]
    let curr = nums[i]

    if(prev >= curr) {
      let diff = prev - curr
      count+=diff +1
      nums[i] = curr + diff + 1
    }
  }
  return count
};