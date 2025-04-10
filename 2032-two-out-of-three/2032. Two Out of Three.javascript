/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {

  let set1 = new Set(nums1)
  let set2 = new Set(nums2)
  let set3 = new Set(nums3)

  let all = new Set()

  for(let i = 0; i < nums1.length; i++) {
    let num = nums1[i]
    if(set2.has(num) || set3.has(num)) {
      all.add(num)
    }
  }
  for(let i = 0; i < nums2.length; i++) {
    let num = nums2[i]
    if(set1.has(num) || set3.has(num)) {
      all.add(num)
    }
  }
  for(let i = 0; i < nums3.length; i++) {
    let num = nums3[i]
    if(set1.has(num) || set2.has(num)) {
      all.add(num)
    }
  }
  return [...all]
};