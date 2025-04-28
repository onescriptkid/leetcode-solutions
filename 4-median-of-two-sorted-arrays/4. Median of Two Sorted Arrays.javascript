/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

  let total = nums1.length + nums2.length
  let half = Math.floor((total + 1 )/ 2)

  let A = nums1
  let B = nums2
  if(nums1.length > nums2.length) {
    A = nums2
    B = nums1
  }

  let l = 0
  let r = A.length
  //  1 2 3 4       half = 6 
  //  l   m r

  //  1 2 3 4
  //  l   m r

  //  0 0 0 0 5 6 7 8   
  //  l       n     r

  while(l <= r) {
    let m = Math.floor((l + r) /2)
    let n = half - m

    let Aleft = m > 0 ? A[m-1] : -Infinity
    let Aright = m < A.length ? A[m] : Infinity 
    let Bleft = n > 0 ? B[n-1] : -Infinity
    let Bright = n < B.length ? B[n] : Infinity

    if(Aleft <= Bright && Bleft <= Aright) {
      if(total % 2 !== 0) {
        return Math.max(Aleft, Bleft)
      }
      return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2
    } else if(Aleft > Bright) {
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return -1

};