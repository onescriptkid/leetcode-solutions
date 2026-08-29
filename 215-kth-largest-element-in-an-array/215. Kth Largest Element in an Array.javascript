/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let minheap = new PriorityQueue((a,b) => a > b ? 1 : -1)   

  for(let num of nums) {
    minheap.push(num)

    if(minheap.size() > k) minheap.pop()
  }
  // console.log(minheap.toArray())

  return minheap.front()
};