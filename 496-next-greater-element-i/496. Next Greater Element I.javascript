/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

  // 4 1 2
  // - 3 -

  // 1 3 4 2
  // 3 4 - -


  // 1 3 4 2      [1] {}
  //   i
  
  // 1 3 4 2      [] {1: 3}
  //   i

  let stack = []
  let hash = {}
  for(let num of nums2) {

    while(stack.length > 0) {
      let top = stack[stack.length - 1]
      if(num > top) {
        hash[top] = num
      } else {
        break;
      }
      stack.pop()
    }
    stack.push(num)
  }

  let out = []
  for(let num of nums1) {
    if(hash[num] === undefined) {
      out.push(-1)
    } else {
      out.push(hash[num])
    }
  }
  return out

};