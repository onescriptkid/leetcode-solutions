/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let out = []
  let arr = []   
  let used = new Set()

  function bt(i) {
    if(arr.length === k) {
      out.push([...arr])
      return
    }

    for(let j = i; j <= n; j++) {
      arr.push(j)
      bt(j+1)
      arr.pop()
    }
  }
  bt(1)

  return out
};