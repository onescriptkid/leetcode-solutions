/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let memo = new Array(nums.length).fill(undefined)

  function dfs(i) {
    if(i >= nums.length) return 0
    if(memo[i] !== undefined) return memo[i]

    let opt1 = dfs(i+1)
    let opt2 = nums[i] + dfs(i+2) 

    return memo[i] = Math.max(opt1, opt2)
  }
  return dfs(0)
};