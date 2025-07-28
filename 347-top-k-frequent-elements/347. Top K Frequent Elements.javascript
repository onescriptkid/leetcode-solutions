/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

  let freq = {}
  let max = 0
  for(let num of nums) {
    freq[num] = (freq[num] || 0) + 1
    max = Math.max(max, freq[num])
  }

  let buckets = new Array(max + 1).fill(0).map(v => [])
  for(let key in freq) {
    let count = freq[key]
    buckets[count].push(Number(key))
  }


  // 0: []
  // 2: [3,4]
  // 3: [1,2]
  let out = []
  for(let i = buckets.length - 1; i >= 0; i--) {
    let bucket = buckets[i]
    for(let val of bucket) {
      out.push(val) 
      if(out.length === k) {
        return out
      }
    }
  }

  return [-1]

  // 1 1 1 2 2 2 3 3 4 4
  // 0 0
  // 1 3
  // 2 3
  // 3 2
  // 4 2

};