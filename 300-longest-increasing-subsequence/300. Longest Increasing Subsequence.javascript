/**
 * @param {number[]} nums
 * @return {number}
*/
var lengthOfLIS = function (nums) {
  // 0 1 2 3 4 5
  // 0 1 0 3 2 3
  //           i
  // lis(5) = Max(1)
  // lis(4) = Max(1, 1+lis(4))
  // lis(3) = Max(1, 1+lis(4), 1 + lis(3))

  let dp = new Array(nums.length)
  let max = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    let opts = [1]
    for(let j = i+1; j < nums.length; j++) {
      if(nums[j] > nums[i]) {
        opts.push(1+dp[j])
      }
    }
    // console.log('i', i, 'opts', opts)
    dp[i] = Math.max(...opts)
    if(dp[i] > max) {
      max = dp[i]
    }
  }
  return max
};