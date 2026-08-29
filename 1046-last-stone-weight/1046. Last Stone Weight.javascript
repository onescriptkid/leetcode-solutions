/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  let maxheap = new PriorityQueue((a,b) => a < b ? 1 : -1)   

  for(let stone of stones) maxheap.push(stone)

  while(maxheap.size() > 1) {
    let s0 = maxheap.pop()
    let s1 = maxheap.pop()

    if(s0 === s1) continue

    let diff = Math.abs(s0 - s1)

    maxheap.push(diff)
  }

  if(maxheap.size() === 1) return maxheap.pop()

  return 0
};