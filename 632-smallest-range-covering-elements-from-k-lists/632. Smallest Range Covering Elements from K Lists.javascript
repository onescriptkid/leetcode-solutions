/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
  let minheap = new PriorityQueue((a,b) => a[0] > b[0] ? 1 : -1)
  let min = Infinity
  let max = -Infinity

  for(let li = 0; li < nums.length; li++) {
    minheap.push([nums[li][0], li, 0])
    min = Math.min(min, nums[li][0])
    max = Math.max(max, nums[li][0])
  }  

  let range = [min, max]

  while(minheap.size() > 0) {
    let [val, li, i] = minheap.pop()
    let next = i + 1
    let nextval = nums[li][next]
    if(nextval === undefined) break

    minheap.push([nextval, li, next])

    min = minheap.front()[0]
    max = Math.max(max, nextval)

    if(max - min < range[1] - range[0]) {
      range = [min, max]
    }
  }

  return range
};