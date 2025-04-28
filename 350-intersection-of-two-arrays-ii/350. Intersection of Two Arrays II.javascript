/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let freq1 = {}
  let freq2 = {}

  // for(let num of nums1) {
  //   freq1[num] = (freq1[num] || 0) + 1
  // }
  for(let num of nums2) {
    freq2[num] = (freq2[num] || 0) + 1
  }


  let out = []
  for(let num of nums1) {
    if(freq2[num] !== undefined && freq2[num] > 0) {
      freq2[num]--
      out.push(num)
    }
  }

  return out


};