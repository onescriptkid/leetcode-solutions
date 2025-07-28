/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  // 0 1 2 3 4 5

  // 5 7 7 8 8 10
  // l         
  //     m     
  //           r
  
  // 5 7 7 8 8 10
  //       l         
  //         m     
  //           r

  let l = 0
  let r = nums.length - 1
  let p = -1

  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = nums[m]
    if(mid === target) {
      p = m
      break;
    }
    if(mid < target) {
      l = m + 1
    }
    if(mid > target) {
      r = m - 1
    }
  }
  // console.log('p', p, 'nums', nums)
  if(p === -1) return [-1,-1]
  // 0 1 2 3 4 5 6 7 8 9 10 11

  // 5 7 7 8 8 8 8 8 8 8 8 10
  // l         
  //           m     
  //                       r

  // 5 8 8 8 8 8 8 8 8 8 8 10
  // l       r
  //     m     
  // 5 8 8 8 8 8 8 8 8 8 8 10
  // l r
  // m     
  // 5 8 8 8 8 8 8 8 8 8 8 10
  //   r
  //   l
  //   m     

  let max = p
  let l0 = 0
  let r0 = p
  while (l0 <= r0) {
    let m0 = Math.floor((l0 + r0) / 2)
    let mid0 = nums[m0]

    if (mid0 >= target) {
      max = m0
      r0 = m0 - 1
    } else {
      l0 = m0 + 1
    }
  }
  // console.log('  max', [max, '-'])
  
  // 5 7 7 8 8 8 8 8 8 8 8 8 9 9 10
  //           l         
  //                   m     
  //                             r
  // 5 7 7 8 8 8 8 8 8 8 8 8 9 9 10
  //                         l         
  //                       m     
  //                              r
  let min = p
  let l1 = p
  let r1 = nums.length - 1
  while (l1 <= r1) {
    let m1 = Math.floor((l1 + r1) / 2)
    let mid1 = nums[m1]

    if (mid1 <= target) {
      min = m1
      l1 = m1 + 1
    } else {
      r1 = m1 - 1
    }
  }
  // console.log('  min', ['-', min])
  return [max, min]

};