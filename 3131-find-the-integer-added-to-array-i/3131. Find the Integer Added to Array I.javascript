/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {

  // 2 6 4    9 7 5
  // 5 9 7

  // 2 6 4    0 4 2


  // 2 6 4    2 6
  // 9 7 5    5 9
  // 0 4 2    0 4

  let max1;
  for(let num of nums1) {
    if(max1 === undefined) {
      max1 = num
    } else if(num > max1) {
      max1 = num
    }
  }

  let max2;
  for(let num of nums2) {
    if(max2 === undefined) {
      max2 = num
    } else if(num > max2) {
      max2 = num
    }
  }

  let diff = max2 - max1
  return diff

};