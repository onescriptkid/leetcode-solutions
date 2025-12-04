/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let out = []
  let deq = []
  let head = 0   
  for(let i = 0; i < nums.length; i++) {
    if(head < deq.length && deq[head] <= i - k) head++

    while(head < deq.length && nums[deq[deq.length - 1]] < nums[i]) {
      deq.pop()
    }
    deq.push(i)

    if(i >= k - 1) out.push(nums[deq[head]])
  }
  return out
};