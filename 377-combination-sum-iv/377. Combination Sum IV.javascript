/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {

  let memo = {}

  function dfs(left) {
    if(left === 0) {
      return 1
    }
    if(left < 0) {
      return -1
    }
    if(memo[left] !== undefined) {
      return memo[left]
    }
    // let paths = []
    let pathsum = 0
    for(let i = 0; i < nums.length; i++) {
      let num = nums[i]
      let path = dfs(left - num)
      if(path !== -1) {
        pathsum+=path
        // paths.push(path)
      }
    }

    memo[left] = pathsum
    return memo[left]
  }
  return dfs(target)
};