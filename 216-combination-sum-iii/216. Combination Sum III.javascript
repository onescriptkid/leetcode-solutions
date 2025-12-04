/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let out = []
  let arr = []
  let used = new Set()   

  function bt(j, sum) {
    console.log(j, sum)

    if(sum === n && arr.length === k) {
      out.push([...arr])
      return
    }
    if(sum >= n || arr.length === k) return

    for(let i = j; j <= 9; j++) {
      if(used.has(j)) continue
      used.add(j)
      arr.push(j)
      bt(j+1, sum+j)
      arr.pop()
        used.delete(j)
    }
  }
  bt(1, 0)

  return out
};