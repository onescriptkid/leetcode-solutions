/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {

  let min
  let max
  for(let num of nums) {
    if(min == undefined) {
      min = num
    } else if(num < min) {
      min = num
    }
    if(max === undefined) {
      max = num
    } else if(num > max) {
      max = num
    }
  }

  let out = 0
  for(let num of nums) {
    if(num !== min && num !== max) {
      return num
    }
  }
  return -1
};