/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {



  // 1  3 -1 -3  5  3  6  7    max     k=3
  // x  x  x                   3
  //    x  x  x                3
  //       x  x  x             3
  //                x  x  x    7        

  // 1  3 -1 -3  5  3  6  7    max     deq
  // x  x  x                   3       [[1,3], ]
  
 
 
  // 1  3 -1 -3  5  3  6  7    max     k=3
  //          r                [1 3 -1]
  // l
  
  let deq = []
  let l =  0
  let r = 0
  while(r < k) {
    while(deq.length > 0 && nums[deq[deq.length - 1]] < nums[r] ) {
      deq.pop()
    }
    deq.push(r)
    r++
  }

  // console.log('l r', l, r, 'deq', deq, 'max', max)
  // console.log('')
  let out = [nums[deq[0]]]
  while(r < nums.length) {
    // console.log('l r', l, r, 'deq', deq, 'max', deq?.[0]?.[1])
    let right = nums[r]
    let left = nums[l]

    // Remove smaller numbers from deq [5 4 3 2 1 ]
    while(deq.length > 0 && nums[deq[deq.length - 1]] < right) {
      deq.pop()
    }
    deq.push(r)

    l++ 
    r++

    // Remove values from deq which are not in the window anymore
    // console.log('  len', len, 'win', nums.slice(l, r), 'deq', deq)
    // console.log('')
    if(l > deq[0]) {
      deq.shift()
    }

    out.push(nums[deq[0]] )

  }


  return out
};