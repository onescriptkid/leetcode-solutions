/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {

   let out = []

  let left = 0
  let leftSum = []
  for (let i = 0; i < nums.length; i++) {
    leftSum.push(left)
    left += nums[i]
  }   

  let right = 0
  let rightSum = []
  for(let i = nums.length - 1; i >= 0; i--) {
    rightSum.unshift(right)
    right+=nums[i]
  }
  // console.log(leftSum)
  // console.log(rightSum)
  for(let i = 0; i < nums.length; i++) {
    let ans = Math.abs(leftSum[i] - rightSum[i])
    out.push(ans)
  }
  return out
};