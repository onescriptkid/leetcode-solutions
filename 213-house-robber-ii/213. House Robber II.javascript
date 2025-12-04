/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let memo = new Array(nums.length + 1).fill(0).map(v => new Array(2).fill(undefined)) 

  function dfs(i, robend) {
    if(i >= nums.length) return 0
    if(robend === true && i === nums.length - 1) return 0

    if(memo[i][robend] !== undefined) return memo[i][robend]

    let opt1 = dfs(i+1, robend)
    let opt2 = nums[i] + dfs(i+2, i=== 0 || robend)

    return memo[i][robend] = Math.max(opt1, opt2)
  }
  return Math.max(dfs(0, false), dfs(1, false))
};