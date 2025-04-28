/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

  // 1 3 4 2  [1]  {}
  // i
  
  // 1 3 4 2  [1]  {}
  //   i
  // 1 3 4 2  []  {1: 3}
  //   i
  // 1 3 4 2  [3]  {1: 3}
  //   i
  
  // 1 3 4 2  [3]  {1: 3}
  //     i   
  // 1 3 4 2  []  {1: 3, 3: 4}
  //     i   
  // 1 3 4 2  [4]  {1: 3, 3: 4}
  //     i   


  let stack = []
  let map = {}
  for(let num of nums2) {
    while(num > stack[stack.length - 1]) {
      let top = stack.pop()
      map[top] = num
    }
    stack.push(num)
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