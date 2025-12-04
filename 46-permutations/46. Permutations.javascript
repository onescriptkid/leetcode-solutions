/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let arr = []
  let out = []
  let used = new Set()

  function bt() {
    if(arr.length === nums.length) {
      out.push([...arr])
      return
    }

    for(let num of nums) {
      if(used.has(num)) continue
      used.add(num)
      arr.push(num)
      bt()
      arr.pop()
      used.delete(num)
    }
  }
  bt()
  return out
};