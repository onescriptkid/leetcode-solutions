/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {

  let max = Math.max(...citations)   

  let buckets = new Array(max + 1).fill(0)

  for(let c of citations) {
    buckets[c]++
  }

  let sum = 0

  // 3 0 6 1 5

  // 0 1 2 3 4 5 6
  // 0 1 0 1 0 1 1
  for(let i = buckets.length -1; i >= 0; i--) {
    let bucket = buckets[i]

    sum+=bucket
    if(sum>= i) return i

  }
  return 0
};