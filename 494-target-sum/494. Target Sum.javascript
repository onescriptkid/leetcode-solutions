/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  let max = 0
  for(let num of nums) max+=num
  let memo = new Array(nums.length).fill(undefined).map(v => new Array(max).fill(undefined))   

  function dfs(i, sum) {
    // if(i === nums.length - 1 && sum === target) return 1
    if(i >= nums.length) {
      if(sum === target) return 1
      return 0
    }
    if(memo[i][sum] !== undefined) return memo[i][sum]

    let opt1 = dfs(i+1, nums[i] + sum)
    let opt2 = dfs(i+1, -nums[i] + sum)

    return memo[i][sum] = opt1 + opt2
  }
  return dfs(0, 0)
};