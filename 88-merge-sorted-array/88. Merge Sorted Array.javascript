/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {


  // nums1 =   1 2 3 0 0 0
  //                     i
  //               j
  // nums2 =         2 5 6
  //                     k
  let j = m - 1
  let k = n - 1
  for(let i = nums1.length-1; i >= 0; i--) {
    if(j < 0) {
      nums1[i] = nums2[k]
      k--
    } else if(k < 0) {
      nums1[i] = nums1[j]
      j--
    } else if(nums1[j] > nums2[k]) {
      nums1[i] = nums1[j]
      j--
    } else {
      nums1[i] = nums2[k]
      k--
    }
  }
  return nums1

};