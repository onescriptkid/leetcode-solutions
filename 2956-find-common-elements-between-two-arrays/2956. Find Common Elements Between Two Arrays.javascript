/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {

  // 4 3 2 3 1     2 2 5 2 3 6
  //   x x x
  // 3             x x   x x
  //               4

  let set1 = new Set(nums1)
  let set2 = new Set(nums2)
  let i = 0
  for(let num of nums1) {
    if(set2.has(num)) {
      i++
    }
  }

  let j = 0
  for(let num of nums2) {
    if(set1.has(num)) {
      j++
    }
  }
  return [i, j] 
};