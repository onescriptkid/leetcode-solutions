/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

  let memo = new Array(nums.length + 2).fill(0).map(v => new Array(2).fill(undefined))

  function dfs(i, robend) {
    if(memo[i][robend] !== undefined) {
      return memo[i][robend]
    }
    if(i >= nums.length) {
      return 0
    }
    if(i >= nums.length - 1 && robend === true) {
      return 0
    }

    let opt1 = nums[i] + dfs(i+2, robend || i === 0)
    let opt2 = dfs(i+1, robend)

    memo[i][robend] = Math.max(opt1, opt2)
    return memo[i][robend]
  }
  return Math.max(dfs(0, false), dfs(1, false)) 
};