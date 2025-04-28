/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  let maxheap = new MaxPriorityQueue()
  for (let stone of stones) {
    maxheap.enqueue(stone)
  }

  while (maxheap.size() > 1) {
    let first = maxheap.dequeue()
    let second = maxheap.dequeue()
    let diff = first - second
    if(diff !== 0) {
      maxheap.enqueue(diff)
    }
  }
  return maxheap.front() || 0
};