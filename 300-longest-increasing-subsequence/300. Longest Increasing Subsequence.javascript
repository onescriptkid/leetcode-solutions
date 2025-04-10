/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // 0 1 2 3 4 5
  // 0 1 0 3 2 3
  // lis(5) = Max(1)
  // lis(4) = Max(1, 1 + lis(5))
  // lis(3) = Max(1, 1 + lis(5), 1 + lis(4))

  let dp = new Array(nums.length).fill(0)
  let max
  for(let i = nums.length - 1; i >= 0; i--) {
    let num = nums[i]
    let opts = [1]
    for(let j = i + 1; j < nums.length; j++) {
      let next = nums[j]
      if(next > num) {
        let opt = 1 + dp[j]
        opts.push(opt)
      }
    }
    dp[i] = Math.max(...opts)
    if(max === undefined) {
      max = dp[i]
    } else if(dp[i] > max) {
      max = dp[i]
    }
  }
  return max
};