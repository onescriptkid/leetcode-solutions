/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  let memo = {}

  function dfs(sum) {
    if(memo[sum] !== undefined) return memo[sum]
    if(sum === target) return 1
    if(sum > target) return 0

    let results = 0
    for(let num of nums) {
      let res = dfs(sum + num)
      results+=res
    }

    memo[sum] = results
    return memo[sum]

  }   
  return dfs(0)
};