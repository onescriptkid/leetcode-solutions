/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  // 0 0 1 1 1 2 2 3 3 4
  // i
  // j
  
  // 0 0 1 1 1 2 2 3 3 4
  //   i
  //   j
  // 0 0 1 1 1 2 2 3 3 4
  //     i
  //   j
  // 0 1 0 1 1 2 2 3 3 4
  //     i
  //     j
  
  // 0 1 0 1 1 2 2 3 3 4
  //       i
  //     j
  
  // 0 1 0 1 1 2 2 3 3 4
  //         i
  //     j
  
  // 0 1 0 1 1 2 2 3 3 4
  //           i
  //     j
  // 0 1 2 1 1 0 2 3 3 4
  //           i
  //     j

  // let prev
  let j = 0
  let k = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(nums[j] !== nums[i]) {
      j++
      nums[j] = nums[i]
    }
    // if(prev !== undefined) {
      // if(prev === nums)

    // }
    // prev = num
  }
  return j + 1
  
  // 0 0 1 1 1 2 2 3 3 4
  //     i
  //   j

};