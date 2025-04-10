/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
  // -1 1 1 2 3
  //  l       r
  nums.sort((a,b) => a > b ? 1 : -1) 

  let count = 0
  let l = 0
  let r = nums.length - 1
  while(l < r) {
    let sum = nums[l] + nums[r]
    // console.log('nums[l]', nums[l], 'nums[r]', nums[r], nums)
    if(sum < target) {
      count+=(r-l)
      l++
    } else if(sum === target) {
      r--
    } else if(sum > target) {
      r--
    }
  }

  return count
};