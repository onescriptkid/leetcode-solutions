/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {

  // stones = stones.sort((a,b) => a > b ? 1 : -1)  
  // // 2 7 4 1 8 1
  // // 1 1 2 4 7 8
  // // [ 7 8]
  // while(stones.length > 1) {
  //   let s1 = stones.pop()
  //   let s2 = stones.pop()
  //   let diff = s1 - s2
  //   if(diff !== 0) {
  //     stones.push(diff)
  //     stones = stones.sort((a,b) => a > b ? 1 : -1)
  //   }
  // }
  // if(stones.length === 0) return 0
  // return stones[0]

  let heap = new MaxPriorityQueue()
  for(let stone of stones) {
    heap.enqueue(stone)
  }
  // console.log('heap', heap._heap._heap._nodes)

  while(heap.size() > 1) {
    let s1 = heap.dequeue()
    let s2 = heap.dequeue()

    let diff = s1 - s2
    if(diff !== 0) {
      heap.enqueue(diff)
    }
  }
  if(heap.size() === 0) return 0
  return heap.front()

};