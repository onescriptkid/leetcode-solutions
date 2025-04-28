/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

  // 1 2 3 0 0 0    2 5 6
  //     i              j
  //           k

  let k = m + n - 1
  let i = m - 1
  let j = n - 1

  while(i >= 0 && j >= 0) {
    let num1 = nums1[i]
    let num2 = nums2[j]

    if(num1 > num2) {
      nums1[k] = num1
      i--
      k--
    } else {
      nums1[k] = num2
      j--
      k--
    }
  }
  while(i >= 0) {
    nums1[k] = nums1[i]
    k--
    i--
  }
  while(j >= 0) {
    nums1[k] = nums2[j]
    k--
    j--
  }
  return nums1

};