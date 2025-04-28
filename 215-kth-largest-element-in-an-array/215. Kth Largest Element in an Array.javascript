/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let pq = new MinPriorityQueue()
  // 1 2 3 4 5 6

  for(let num of nums) {
    pq.enqueue(num)
    if(pq.size() > k) {
      pq.dequeue()
    } 
  }

  // let i = 0
  // let kth
  // while(i < k) {
  //   kth = pq.dequeue()
  //   i++
  // }

  return pq.front()
};