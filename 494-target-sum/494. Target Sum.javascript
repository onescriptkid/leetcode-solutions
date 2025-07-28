/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {

  let memo = {}

  function dfs(i, sum) {
    let key = `${i},${sum}`
    // console.log('key', key)
    if(memo[key] !== undefined) {
      return memo[key]
    }
    // if(sum === target) {
    //   return 1
    // }
    // console.log('i', i, 'nums.length', nums.length, i >= nums.length)
    if(i >= nums.length) {
      if(sum === target) {
        return 1
      } else {
        return 0
      }
    }

    let opt1 = dfs(i+1, sum+nums[i])
    let opt2 = dfs(i+1, sum-nums[i])
    // console.log('  ', key, 'opt1', opt1, 'opt2', opt2, '-', str)
    memo[key]=opt1+opt2
    return memo[key]
  } 
  return dfs(0,0)
};