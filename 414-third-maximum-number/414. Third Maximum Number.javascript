/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let max1
  let max2
  let max3

  for(let num of nums) {

    if(max1 === undefined) {
      max1 = num
    } else if(num > max1) {
      max3 = max2
      max2 = max1
      max1 = num
    } else if(max2 === undefined && num !== max1) {
      max2 = num
    } else if(num > max2 && num !== max1) {
      max3 = max2
      max2 = num
    } else if(max3 === undefined && num !== max1 && num !== max2) {
      max3 = num
    } else if(num > max3 && num !== max1 && num !== max2) {
      max3 = num
    }
  }
  if(max3 === undefined) return max1
  return max3

};