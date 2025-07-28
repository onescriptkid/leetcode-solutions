/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {

  let out = []
  let arr = []
  function dfs(i, sum) {
    if(sum === target) {
      out.push([...arr])
      return
    }
    if(sum > target) {
      return
    }

    for(let j = i; j < candidates.length; j++) {
      let can = candidates[j]
      arr.push(can)
      dfs(j, sum+can)
      arr.pop()
    }
  }
  dfs(0,0)
  return out
};