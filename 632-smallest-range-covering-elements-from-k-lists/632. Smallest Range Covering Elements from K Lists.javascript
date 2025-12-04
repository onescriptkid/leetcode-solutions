/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
  // 4 10 15 24 26   
  // i
  // 0 9  12 20
  // j
  // 5 18 22 30
  // k

  let min = Infinity
  let max = -Infinity
  let minheap = new PriorityQueue((a,b) => a[0] > b[0] ? 1 : -1)
  for(let li = 0; li < nums.length; li++) {
    min = Math.min(min, nums[li][0])
    max = Math.max(max, nums[li][0])

    minheap.push([ nums[li][0], li, 0])
  }
  let range = [min, max]
  console.log(min, max)

  while(minheap.size() > 0) {
    let [val, li, i] = minheap.pop()

    // get next val
    let next = i+1
    let nextval = nums[li][next]
    if(nextval === undefined) break;

    // Push onto heap
    minheap.push([ nextval, li, next ])

    // Increase max if max increased
    if(nextval > max) max = nextval
    min = minheap.front()[0]

    // console.log('val li i', val, li, i, '-', min, max)

    if(max - min < range[1] - range[0]) {
      range = [min, max]
    }
  }


  return range
};