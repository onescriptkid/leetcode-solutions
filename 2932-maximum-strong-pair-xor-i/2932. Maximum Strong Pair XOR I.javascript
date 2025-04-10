/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
  // 1 - 5  
  // 4 - 5
  let max
  for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++) {
      let num1 = nums[i]
      let num2 = nums[j]
      let min = Math.min(num1, num2)
      let diff = Math.abs(num1 - num2)
      if(diff <= min) {
        let xor = num1 ^ num2
        if(max === undefined) {
          max = xor
        } else if(xor > max){
          max = xor
        }
      }
    }  
  }
  return max || 0

};