/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {

  let groups = {}

  function getLargestDigit(num) {
    let max
    let tmp = num
    while(tmp > 0) {
      let digit = tmp % 10
      if(max === undefined) {
        max = digit
      } else if(digit > max) {
        max = digit
      }
      tmp = Math.floor(tmp / 10)
    }
    return max
  }

  let max
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let ld = getLargestDigit(num)
    if(groups[ld] === undefined) {
      groups[ld] = num
    } else {
      let sum = groups[ld] + num
      if(max === undefined) {
        max = sum
      } else if(sum > max) {
        max = sum
      }

      if(num > groups[ld]) {
        groups[ld] = num
      }
    }
  }

  if(max === undefined) return -1
  return max


};