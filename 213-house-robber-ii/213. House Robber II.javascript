/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

  let memo = {}
  function dfs(i, robend) {
    let key = `${i},${robend}`
    if(memo[key] !== undefined) {
      return memo[key]
    }
    if(i >= nums.length) {
      return 0
    }
    if(robend === true && i === (nums.length -1)) {
      return 0
    }

    let opt1 = nums[i] + dfs(i+2, robend || i === 0)
    let opt2 = dfs(i+1, robend)
    memo[key] = Math.max(opt1, opt2)
    return memo[key]
  }
  return Math.max(dfs(0, false), dfs(1, false))
};