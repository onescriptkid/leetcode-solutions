/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
  // 3 5
  // 1 3 5

  // 0 4 3 0 4

  // 0 1 2 3 4
  // 0 0 3 4 4
  // l   m   r

  // 0 1 2 3 4 5
  // 0 0 0 4 4 4
  // l   m     r
  nums.sort((a,b) => a > b ? 1 : -1)
  
  function bs(n) {

    let l = 0
    let r = nums.length - 1
    let fi = nums.length


    while(l <= r) {
      let m = Math.floor((l + r) / 2)
      let mid = nums[m]
      // console.log('lmr', l, m, r, '--', mid)
      if(mid >= n ) {
        fi = m
        r  = m - 1
      } else {
        l = m + 1
      }
    }
    return nums.length - fi
  }

  // 
  for(let i = 1; i <= nums.length; i++) {
    if(i === bs(i)) {
      return i
    }
  }
  return -1    
};