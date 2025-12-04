/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

  // 4 1 2  1 2 4 2
  // i      j


  // 1 3 4 2  
  // 3 4 - -
  
  // 1 3 4 2   [1]
  //   i 
  let stack = []
  let map = {}
  for(let i = 0; i < nums2.length; i++) {

    while(stack.length > 0 && stack.at(-1) < nums2[i]) {
      let val = stack.pop()
      map[val] = nums2[i]
    }
    stack.push(nums2[i])
  }

  let out = []
  for(let num of nums1) {
    if(map[num] === undefined) {
      out.push(-1)
    } else {
      out.push(map[num])
    }
  }

  return out


};