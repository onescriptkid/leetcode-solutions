/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
  let sums = new Set()

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i]
    let prev = nums[i -1]
    let sum = num + prev
    if(sums.has(sum)) {
      return true
    }
    sums.add(num + prev)
  } 
  return false
};