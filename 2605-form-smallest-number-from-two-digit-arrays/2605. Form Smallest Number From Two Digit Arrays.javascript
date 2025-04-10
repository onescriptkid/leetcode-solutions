/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {

  let min1 = undefined
  let set1 = new Set()
  for(let num of nums1) {
    if(min1 === undefined) {
      min1 = num
    } else if(num < min1) {
      min1 = num
    }
    set1.add(num)
  }

  let min2 = undefined

  let both = undefined
  for(let num of nums2) {
    if(min2 === undefined) {
      min2 = num
    } else if(num < min2) {
      min2 = num
    }
    if(set1.has(num)) {
      if(both === undefined) {
        both = num
      } else if(num < both) {
        both = num
      }
    }
  }

  if(both !== undefined) return both
  if(min1 < min2) return Number(`${min1}${min2}`)
  if(min2 < min1) return Number(`${min2}${min1}`)
};