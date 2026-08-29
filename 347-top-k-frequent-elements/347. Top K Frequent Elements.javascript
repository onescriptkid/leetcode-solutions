/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  // let max = Math.max(...nums)

  let freq = {}
  let max = 0
  for(let num of nums) {
    freq[num] = (freq[num] || 0) + 1
    if(freq[num] > max) {
      max = freq[num]
    }
  }
   
  let buckets = new Array(max+1).fill(0).map(v => [])
  for(let key in freq) {
    let num = Number(key)
    let val = Number(freq[key])
    buckets[val].push(num)
  }

  let out = []
  for(let i = buckets.length - 1; i >= 0; i--) {
    for(let j = 0; j < buckets[i].length; j++) {
      out.push(buckets[i][j])
      if(out.length === k) return out
    }
  }
  return out
};