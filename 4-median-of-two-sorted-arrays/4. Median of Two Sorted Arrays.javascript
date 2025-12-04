/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let a = nums1
  let b = nums2
  if(a.length > b.length) {
    [a,b] = [b,a]
  }   

  let total = a.length + b.length
  let half = Math.floor((total + 1) / 2)

  let l = 0
  let r = a.length // -1
  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let n = half - m

    let aleft = m > 0 ? a[m-1] : -Infinity
    let bleft = n > 0 ? b[n-1] : -Infinity
    let aright= m < a.length ? a[m] : Infinity
    let bright= n < b.length ? b[n] : Infinity

    if(aleft <= bright && bleft <= aright) {
      if(total % 2 === 1) return Math.max(aleft, bleft)

      return (Math.min(aright, bright) + Math.max(aleft, bleft)) / 2
    } else if(aleft > bright) {
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return -1
};