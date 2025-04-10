/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {

  let max
  for(let num of nums) {
    if(max === undefined) {
      max = num
    } else if(num > max) {
      max = num
    }
  }

  let sum = 0
  let num = max
  for(let i = 0; i <k; i++) {
    sum+=num
    num = num + 1
  }
  return sum
};