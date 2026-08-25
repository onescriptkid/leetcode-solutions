/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

  let out = []
  let arr = []
  let set = new Set()
  function bt() {
    if(arr.length === nums.length) {
      out.push([...arr])
      return
    }

    for(let num of nums) {
      if(set.has(num)) continue

      set.add(num)
      arr.push(num)
      bt()
      arr.pop()
      set.delete(num)
    }
  } 
  bt()
  return out
};