/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  // 1 3 4 2  [] {}   
  // i
  // 1 3 4 2  [1] {}   
  //   i

  let map = {}
  let stack = []
  for(let num of nums2) {
    while(stack.length > 0 && stack.at(-1) < num) {
      map[stack.pop()] = num
    }
    stack.push(num)
  }
  let out = []
  for(let num of nums1) {
    out.push(map[num] ?? -1)
  }
  return out
};