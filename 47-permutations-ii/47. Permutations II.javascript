/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let out = []
  let arr = []
  let freq = {}
  for(let num of nums) {
    freq[num] = (freq[num] || 0) + 1
  }   

  function bt() {
    if(nums.length === arr.length) {
      out.push([...arr])
      return
    }

    for(let key in freq) {
      if(freq[key] > 0) {
        freq[key]--
        arr.push(Number(key))
        bt()
        arr.pop()
        freq[key]++
      }
    }
  }
  bt()
  return out
};