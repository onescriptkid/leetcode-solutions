/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {

  let out = 0
  
  // 1 2 3 4
  // 

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if( nums.length % (i+1) === 0) {
      out+=num**2
    }
  }   
  return out
};