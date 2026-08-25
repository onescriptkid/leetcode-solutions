/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  // let memo = new Array()   
  let out = []
  let arr = []
  candidates.sort((a,b) => a > b ? 1 : -1)

  function bt(i, sum) {
    if(sum === target) {
      out.push([...arr])
      return
    }
    if(sum > target) return

    for(let j = i; j < candidates.length; j++) {
      if(i !== j && candidates[j] === candidates[j-1]) continue
      let can = candidates[j]

      arr.push(can)
      bt(j+1, sum+can)
      arr.pop()
    }
  }
  bt(0, 0)
  return out
};