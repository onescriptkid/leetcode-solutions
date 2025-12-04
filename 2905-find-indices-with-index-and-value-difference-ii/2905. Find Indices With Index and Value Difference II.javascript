/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {

  let minj = 0
  let maxj = 0
  let j = 0
  for(let i = indexDifference; i < nums.length; i++) {
    if(nums[j] < nums[minj]) minj = j
    if(nums[j] > nums[maxj]) maxj = j

    if(Math.abs(nums[i] - nums[minj]) >= valueDifference) return [i, minj]
    if(Math.abs(nums[i] - nums[maxj]) >= valueDifference) return [i, maxj]

    j++
  }   
  return [-1,-1]
};