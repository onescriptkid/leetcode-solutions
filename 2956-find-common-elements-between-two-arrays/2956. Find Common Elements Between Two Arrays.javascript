/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)

  let answer1 = 0
  for(let i = 0; i < nums1.length; i++) {
    let num = nums1[i]
    if(set2.has(num)) {
      answer1++
    }
  }
  let answer2 = 0
  for(let i = 0; i < nums2.length; i++) {
    let num = nums2[i]
    if(set1.has(num)) {
      answer2++
    }
  }
  return [answer1, answer2]
  
};