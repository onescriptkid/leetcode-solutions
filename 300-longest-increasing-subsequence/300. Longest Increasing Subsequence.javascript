/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

  // lis(5) = 1
  // lis(4) = 1 or 1 + lis(4)
  // lis(3) = 1 or 1 + lis(4) or 1 + lis(3)

  let max = 0
  let dp = new Array(nums.length).fill(1)

  for(let i = nums.length -1 ; i >= 0; i--) {
    let opts = [1]
    for(let j = i +1; j < nums.length; j++) {
      if(nums[i] < nums[j]) {
        opts.push(1+dp[j])
      }
    }

    dp[i] = Math.max(...opts)
    max = Math.max(max, dp[i])
  }
  return max
};