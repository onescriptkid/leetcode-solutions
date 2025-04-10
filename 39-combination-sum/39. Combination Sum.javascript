/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let out = []
  function dfs(arr, j, total) {
    if(total === target) {
      out.push([...arr])
    }
    if(total > target) {
      return
    }
    for(let i = j; i < candidates.length; i++) {
      let candidate = candidates[i]
      arr.push(candidate)
      dfs(arr, i, total + candidate)
      arr.pop()
    }
  }
  dfs([], 0, 0)
  return out
};