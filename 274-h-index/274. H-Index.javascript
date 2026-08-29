/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  let max = Math.max(...citations)
  let buckets = new Array(max + 1).fill(0)   

  for(let citation of citations) {
    buckets[citation]++
  }

  let sum = 0
  for(let i = buckets.length - 1; i >= 0; i--) {
    sum+=buckets[i]
    if(sum >= i) return i
  }
  return 0
};