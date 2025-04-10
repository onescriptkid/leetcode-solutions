/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let freq1 = {}
  for(let num of nums1) {
    freq1[num] = (freq1[num] || 0) + 1
  }

  let out = []
  for(let num of nums2) {
    if(freq1[num] !== undefined && freq1[num] > 0) {
      freq1[num]--
      out.push(num)
    }
  }
  return out
};