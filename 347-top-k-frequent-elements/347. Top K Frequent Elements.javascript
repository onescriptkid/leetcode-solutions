/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // create freq list
  let freq = {}
  for(let num of nums) {
    if(freq[num]=== undefined) {
      freq[num] = 1
    } else {
      freq[num]++
    }
  }

  let buckets = new Array(nums.length + 1).fill(0).map(v => [])

  for(let key of Object.keys(freq)) {
    let count = freq[key]
    buckets[count].push(Number(key))
  }

  // create buckets
  // { 0: [], 1:[3], 2:[2], 3:[1]}

  // reverse over buckets
  let out = []
  for(let i = buckets.length - 1; i >= 0; i--) {
    let bucket = buckets[i]

    for(let val of bucket) {
      out.push(val)
      if(out.length === k) return out 
    }
  }
};