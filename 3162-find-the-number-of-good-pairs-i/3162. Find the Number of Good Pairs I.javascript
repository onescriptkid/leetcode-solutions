/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
  let good = 0
  for(i = 0; i < nums1.length; i++) {
    let n1 = nums1[i]
    for(let j = 0; j < nums2.length; j++) {
      let n2 = nums2[j]
      if(n1 % (n2 * k) === 0) {
        good++
      }
    }
  }
  return good
};