/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  nums = [1, ...nums, 1]

  let memo = new Array(nums.length + 1).fill(0).map(v => new Array(nums.length + 1).fill(undefined))

  function dfs(l, r) {
    if(memo[l][r] !== undefined) return memo[l][r]

    let max = 0
    for(let i = l; i <= r; i++) {
      let res = nums[l-1] * nums[i] * nums[r+1] + dfs(l, i-1) + dfs(i+1, r)
      max = Math.max(max, res)
    }

    return memo[l][r] = max
  }
  return dfs(1, nums.length -2)
};