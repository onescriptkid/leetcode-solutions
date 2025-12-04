/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let freq = {}
  let max = 0
  for(let num of nums) {
    freq[num] = (freq[num] || 0) +1
    max = Math.max(max, freq[num])
  }  

  let buckets = new Array(max + 1).fill(0).map(v => [])

  for(let key in freq) {
    let val = freq[key]
    buckets[val].push(Number(key))
  }
  // console.log(buckets)
  // 1: [3]
  // 2: [2]
  // 3: [1]
  let out = []
  for(let i = buckets.length - 1; i >= 0; i--) {
    for(let j = 0; j < buckets[i].length; j++) {
      out.push(buckets[i][j])
      if(out.length === k) return out
    }
  }
  return out
};