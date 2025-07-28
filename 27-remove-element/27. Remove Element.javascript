/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // 0 1 2 2 3 0 4 2
  // i
  // j
  
  // 0 1 2 2 3 0 4 2
  //         i
  //     j
  // 0 1 2 2 3 0 4 2
  //           i
  //       j

  // 3 2 2 3
  //   i
  // j


  let j = 0
  for(let i = 0; i < nums.length; i++) {
    nums[j] = nums[i]
    if(nums[i] !== val) {
      j++
    }
    // console.log('i', i, 'j', j, 'nums[i]', nums[i], 'nums[j]', nums[j], nums)
    // if(i > 10)break;
  }
  // console.log('nums', nums, 'j', j)
  return j


};