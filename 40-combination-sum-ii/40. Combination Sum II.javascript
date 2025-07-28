/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

  let out = []
  candidates.sort((a,b) => a > b ? 1 : -1) 

  function dfs(i, arr, left) {
    if(left === 0) {
      out.push(arr.slice())
      return
    }
    for(let j = i; j < candidates.length; j++) {
      let can = candidates[j]
      if(j > i && candidates[j-1] === can)continue
      if(can > left) break;

      arr.push(can)
      dfs(j+1, arr, left-can)
      arr.pop()
    }

  }
  dfs(0, [], target)
  return out
};