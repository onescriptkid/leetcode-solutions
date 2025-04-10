/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
  let count = 0
  let sum = 0

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if(num % 3 === 0 && num % 2 === 0) {
      count++
      sum+=num
    }
  }
  if(count === 0) return 0
  return Math.floor(sum / count)
};