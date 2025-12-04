/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let arr = []
  let out = []

  function bt(sum, j) {
    if(sum === target) {
      out.push([...arr])
      return 
    }
    if(sum > target) return

    for(let i = j; i < candidates.length; i++) {
      let can = candidates[i]
      arr.push(can)
      bt(sum+can, i)
      arr.pop()
    }
  }
  bt(0, 0)
  return out
};