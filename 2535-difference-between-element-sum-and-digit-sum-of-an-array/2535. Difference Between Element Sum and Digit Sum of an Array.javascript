/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {

  let elementSum = 0
  let digitSum = 0

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]

    elementSum+=num

    let n = num
    while(n > 0) {
      let digit = n % 10
      digitSum+=digit
      n = Math.floor(n / 10)
    }
  }   
  return Math.abs(elementSum - digitSum)
};