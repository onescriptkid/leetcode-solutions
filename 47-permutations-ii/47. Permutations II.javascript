/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let freq = {}
  for(let num of nums) {
    freq[num] = (freq[num] || 0) + 1
  }   
  let out = []

  function bt(arr) {
    if(arr.length === nums.length) {
      out.push([...arr])
      return
    }

    for(let key in freq) {
      if(freq[key] > 0) {
        freq[key]--
        arr.push(Number(key))
        bt(arr)
        arr.pop()
        freq[key]++
      }
    }
  }
  bt([])
  return out
};