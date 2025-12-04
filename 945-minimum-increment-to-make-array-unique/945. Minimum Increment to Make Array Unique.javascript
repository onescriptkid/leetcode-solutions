/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {

  // 3 2 1 2 1 7

  // 1 1 2 2 3 7   
  // p c
  
  // 1 2 2 2 3 7   
  //   p c
  
  // 1 2 3 2 3 7   
  //     p c

  nums.sort((a,b) => a > b ? 1 : -1)
  let count = 0
  for(let i = 1; i < nums.length; i++) {
    let curr = nums[i]
    let prev = nums[i-1]

    if(curr <= prev) {
      let diff = prev - curr
      nums[i] = nums[i] + diff + 1
      count+=diff+1
    } 
  }
  return count
};