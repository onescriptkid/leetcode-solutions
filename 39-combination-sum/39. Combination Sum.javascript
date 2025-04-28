/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a,b) => a > b ? 1 : -1)
  let memo = {}
  //                                  [] t=7
  //                          /                   \
  //                       [2]                     []
  //                    /       \                 /    \
  //              [2,2]          [2]           [3]      []
  //            /     \         
  //      [2,2,2]      [2,2]
  let out = []
  function dfs(i, left, arr) {
    if(left === 0) {
      out.push(arr.slice())
      return
    }
    if(left < 0) {
      return -1
    }
    for(let j = i; j < candidates.length; j++) {
      let can = candidates[j]
      arr.push(can)
      dfs(j, left - can, arr)
      arr.pop()
    }
  }
  dfs(0, target, [])
  return out


};