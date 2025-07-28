/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let out = []
  // []    [1,2,3]
  // []    [1,2,3]
  let used = new Set()
  function bt(arr) {

    if(arr.length === nums.length) {
      out.push([...arr])
      return
    }

    for(let num of nums) {
      if (!used.has(num)) {
        arr.push(num)
        used.add(num)
        bt(arr)
        used.delete(num)
        arr.pop()
      }
    }
  }
  bt([])

  return out
};