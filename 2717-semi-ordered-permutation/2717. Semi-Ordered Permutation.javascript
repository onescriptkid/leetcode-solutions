/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function(nums) {

  // 2 1 4 3
  //   i 

  // find 1
  // find n
  let oneIndex
  let nIndex
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(num === 1) {
      oneIndex = i
    }
    if(num === nums.length) {
      nIndex = i
    }
  }

  // // swap
  // console.log(oneIndex, nIndex)
  // let count = 0
  // while(oneIndex > 0) {
  //   let tmp = nums[oneIndex]
  //   nums[oneIndex] = nums[oneIndex - 1]
  //   nums[oneIndex - 1] = tmp
  //   oneIndex--
  //   count++
  // }

  // while(nIndex < nums.length - 1) {
  //   let tmp = nums[nIndex]
  //   nums[nIndex] = nums[nIndex+1]
  //   nums[nIndex + 1] = tmp
  //   nIndex++
  //   count++
  // }
  // return count
  let oneswaps = oneIndex
  let nswaps = nums.length - 1 - nIndex

  if(oneIndex > nIndex) {
    return oneswaps + nswaps - 1
  }
  return oneswaps+ nswaps

};