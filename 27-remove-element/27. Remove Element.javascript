/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

  // 3 2 2 3     3
  //       i
  //     j
  // 2 2 _ _
  // 0 1 2 3    4

  // 0,1,2,2,3,0,4,2     2
  //                 i
  //           j


  let j = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(num !== val) {
      nums[j] = nums[i]
      j++
    }
  }
  // console.log('nums', nums, 'j', j)

  return j

};