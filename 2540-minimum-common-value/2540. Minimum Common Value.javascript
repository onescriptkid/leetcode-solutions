/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
  let set = new Set(nums1)

  for(let i = 0; i < nums2.length; i++) {
    if(set.has(nums2[i])) return nums2[i]
  }
  return -1

  // let l = 0
  // let r = nums2.length - 1
  // 0 1 2 3
  // 2 3 4 5 
  // l m   r

  // let min
  // while(l <= r) {
  //   let m = Math.floor((l + r) / 2)
  //   let mid = nums2[m]

  //   if(set.has(mid)) {
  //     min = mid 
  //     r = m - 1
  //   } else 
  // }   
};