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

  let memo = new Array(nums.length +1).fill(0).map(v => new Array(target+1).fill(undefined))

  function dfs(i, csum) {
    // 3 3 3 4 5  csum=0
    //       i
    // 3 3 3 4 5  csum=5
    //         i

    if(csum === target) return true
    if(csum > target) return false
    if(i >= nums.length) return false
    if(memo[i][csum] !== undefined) return memo[i][csum]

    let opt1 = dfs(i+1, csum)
    let opt2 = dfs(i+1, csum+nums[i])

    return memo[i][csum] = opt1 || opt2
  }
  return dfs(0, 0)
};