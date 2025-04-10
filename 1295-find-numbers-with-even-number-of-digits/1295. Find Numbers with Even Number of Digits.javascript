/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {

  let out = 0

  for(let i = 0; i < nums.length;i++) {
    let num = nums[i]
    let digits = countDigits(num)
    if(digits % 2 === 0) {
      out++
    }
  }

  function countDigits(num) {
    if(num === 0) return 1

    let digits = 0
    while(num > 0) {
      digits++
      num= Math.floor(num / 10)
    }
    return digits
  }
  return out
};