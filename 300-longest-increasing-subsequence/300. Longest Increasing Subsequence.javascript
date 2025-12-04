/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // 0 1 2 3 4 5
  // 0 1 0 3 2 3
  // lis(5) = 1
  // lis(4) = 1, 1+lis(5)
  // lis(3) = 1, 1+lis(4), 1+lis(3)

  let dp = new Array(nums.length).fill(0)
  let max = 0
  for(let i = nums.length - 1; i >= 0; i--) {
    let opts = [1]
    for(let j = i+1; j < nums.length; j++) {
      if(nums[i] < nums[j]) {
        opts.push(1+dp[j])
      }
    }
    dp[i] = Math.max(...opts)
    max = Math.max(max, dp[i])
  }
  return max
};