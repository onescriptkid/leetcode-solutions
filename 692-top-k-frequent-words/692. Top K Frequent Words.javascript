/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let max = 0 
  let freq = {}
  for(let word of words) {
    freq[word] = (freq[word] || 0) + 1
    max = Math.max(max, freq[word])
  }

  // Create buckets of each frequency
  // 0: []
  // 1: [leetcode, coding]
  // 2: [i, love]
  let buckets = new Array(max + 1).fill(0).map(v => [])
  for(let key in freq) {
    let val = freq[key]
    buckets[val].push(key)
  }

  // Sort each bucket lexographically
  for(let bucket of buckets) {
    bucket.sort()
  }

  // Walk over each bucket starting from the moset frequrent ( in reverse)
  let out = []
  for(let i = buckets.length-1; i>=0; i--) {
    for(let j = 0; j < buckets[i].length; j++) {
      out.push(buckets[i][j])
      if(out.length === k) return out
    }
  }

  return out


};