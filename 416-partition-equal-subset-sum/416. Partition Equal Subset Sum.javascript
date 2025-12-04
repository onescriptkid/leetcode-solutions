/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = 0
  for(let num of nums) {
    sum+=num
  }
  if(sum % 2 === 1) return false
  let target = sum / 2

  let memo = new Array(nums.length + 1).fill(0).map(v => new Array(target + 1).fill(undefined))

  function dfs(i, csum) {
    if(memo[i][csum] !== undefined) {
      return memo[i][csum]
    }
    if(csum > target) {
      return false
    }
    if(csum === target) {
      return true
    }
    if(i === nums.length) return false

    memo[i][csum] = dfs(i+1, csum+nums[i]) || dfs(i+1, csum)
    return memo[i][csum]
  }
  return dfs(0,0)

};