/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

  //  0 1  2 3  4 5 6  7 8
  
  // -2 1 -3 4 -1 2 1 -5 4
  // [   ]
  //   [ ]
  //   [   ]
  // let sub = []
  
  let sum = 0
    let max
  for(let num of nums) {
    if(sum < 0) {
      sum = num
    } else {
      sum+=num

    }
    if(max === undefined) {
      max = sum
    } else if(sum > max) {
      max = sum
    }
  }
  return max
};