/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  //     1 1 1 2 2 3  twice=true, prev===nums[i]
  //     p p i
  //       j
  
  //     1 1 1 2 2 3  twice=true, prev===nums[i]
  //       p p i
  //         j
  //     1 1 2 2 2 3  twice=true, prev===nums[i]
  //       p p i
  //         j
  
  //   1 1 1 2 2 3  twice=true, prev===nums[i]
  //       p i
  //     j
  //   1 1 1 2 2 3  twice=true, prev===nums[i]
  //       p i
  //       j
  //   1 1 2 2 2 3  twice=true, prev===nums[i]
  //       p i
  //       j
  
  // 1 1 1 2 2 3   twice=
  //     i
  //  j
  // 1 1 1 2 2 3
  //       i
  //   j
  // 1 2 1 2 2 3
  //       i
  //   j
  
  // 1 2 1 2 2 3
  //           i
  //   j
  // 1 2 1 2 2 3
  //           i
  //     j
  // 1 2 3 2 2 3
  //           i
  //     j
  let j = 0
  let prev = undefined
  let prev2 = undefined
  // let twice = false
  for(let i = 0; i < nums.length; i++) {
    // console.log('i j', i,j, 'nums', nums, 'prev prev2', prev, prev2)
    if(prev === nums[i] && prev2 === nums[i]) {
      // j=i
      // nums[j] = nums[i]
    } else {
      nums[j] = nums[i]
      j++
    }

    // if(prev === nums[i]) {
    //   twice = true
    // } else {
    //   twice = false
    // }


    prev2 = prev
    prev = nums[i]
  }
  // console.log('nums', nums, 'j', j, '-', nums.slice(0, j+1))

  return j
};