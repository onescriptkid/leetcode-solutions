/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  // 0 0 1 1 1 2 2 3 3 4  // 0 1 2 3 4 
  //     i
  //   j
  let j = 0
  for(let i = 1; i < nums.length; i++) {
    let prev = nums[i-1]
    let num = nums[i]
    if(prev !== num) {
      j++
      nums[j] = nums[i]
    }
  }

  return j + 1

};