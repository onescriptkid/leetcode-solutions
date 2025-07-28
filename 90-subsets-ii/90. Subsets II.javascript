/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {

  let out = []
  nums.sort((a,b) => a > b ? 1 : -1)

  function dfs(arr, j) {
    out.push([...arr])

    for(let i = j; i < nums.length; i++) {
      if(i > j && nums[i] === nums[i-1]) continue
      arr.push(nums[i])
      dfs(arr, i+1)
      arr.pop()
    }

  }
  dfs([], 0)
  return out
};