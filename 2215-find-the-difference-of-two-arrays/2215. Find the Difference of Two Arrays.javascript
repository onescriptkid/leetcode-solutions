/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  let set1 = new Set()
  for(let num of nums1) {
    set1.add(num)
  }
  let set2 = new Set()
  for(let num of nums2) {
    set2.add(num)
  }

  let out = []
  let out1 = []
  let out2 = []
  for(let num of [...set1]) {
    if(!set2.has(num)) {
      out1.push(num)
    }
  }
  out.push(out1)
  for(let num of [...set2]) {
    if(!set1.has(num)) {
      out2.push(num)
    }
  }

  out.push(out2)
  
  return out
};