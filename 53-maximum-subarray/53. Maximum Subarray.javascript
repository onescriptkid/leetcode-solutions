/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

  // -2  1 -3  4 -1  2  1 -5  4 
  // -2 -1 -4  [        ]

  let max
  let sum = 0
  for(let num of nums) {
    if(sum < 0) {
      sum = num
    } else {
      sum+=num
    }
    // console.log('num', num, 'sum', sum)
    if(max === undefined) {
      max = sum
    } else if(sum > max) {
      max = sum
    }
  }
  return max
};