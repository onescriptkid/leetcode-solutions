/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let set1 = new Set(nums1)


  let setb = new Set()
  for(let i = 0; i < nums2.length; i++) {
    let num = nums2[i]
    if(set1.has(num)) {
      setb.add(num)
    }
  }
  return [...setb]
};