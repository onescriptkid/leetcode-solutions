/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {

  let sum = 0
  let count = 0
  for(let num of nums) {
    sum+=num
    if(sum === 0) {
      count++
    }
  }
  return count
};