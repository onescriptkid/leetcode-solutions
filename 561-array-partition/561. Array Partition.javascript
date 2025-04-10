/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  // 1 4 3 2
  // 1   2   => 3
  
  // 1 2 3 4
  // 1   3   => 4

  nums.sort((a,b) => a > b ? 1 : -1)

  let sum = 0
  for(let i = 0; i < nums.length; i+=2) {
    let first = nums[i]
    let second = nums[i+1]
    let min = Math.min(first, second)
    sum+=min
  }
  return sum

};