/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
  //  0  1  2  3
  //  3 -2  1  4         => 1
  //        2  3

  //  0  1  2  3  4  5  6  7  8     l=2, r=3     9
  // -1  2 -3  4  5  6  7  8  9
  //                             r
  //                       l
  let min
  for(let s = l; s <= r; s++) {

    // Create window
    let sum = 0
    for(let i = 0; i < s; i++) {
      let num = nums[i]
      sum+=num 
    }
    if(min === undefined && sum > 0) {
      min = sum
    } else if(sum < min && sum > 0) {
      min = sum
    }
    //   0  1  
    // -12  8
    //      r
    //  l


    //  0  1  2  3
    // -2  2 -3  1
    //  x  x  r
    
    //  6  19 4       l=3, ri=3-2+1 2

    // Walk the window
    let li = 0
    let ri = s
    // console.log('sum', sum, 's', s, 'ri', ri, 'nums.length-s+1', nums.length-s+1)
    while(ri < nums.length) {
      // console.log('  li ri', li, ri, 'nums', nums.slice(li, ri))
      let nr = nums[ri]
      ri++
      sum+=nr
      
      let nl = nums[li]
      sum-=nl
      li++

      if(min === undefined && sum > 0) {
        min = sum
      } else if(min > sum && sum > 0) {
        min = sum
      }
    }
  }
  if(min === undefined) return -1

  return min
    
};