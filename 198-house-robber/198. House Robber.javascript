/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

  let memo = {}
  function dfs(i) {
    if(memo[i] !== undefined) {
      return memo[i]
    }
    if(i >= nums.length) {
      return 0
    }
    let opt1 = nums[i] + dfs(i+2)
    let opt2 = dfs(i+1)
    memo[i] = Math.max(opt1, opt2)
    return memo[i]
  }
  return Math.max(dfs(0), dfs(1))
};