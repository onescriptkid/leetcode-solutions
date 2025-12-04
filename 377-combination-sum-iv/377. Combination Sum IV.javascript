/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  let memo = new Array(target + 1).fill(undefined)

  function dfs(sum) {
    if(sum === target) return 1
    if(sum > target) return 0
    if(memo[sum] !== undefined) return memo[sum]

    let res = 0
    for(let num of nums) {
      res+= dfs(sum + num)
    }

    return memo[sum] = res
  }   
  return dfs(0)
};