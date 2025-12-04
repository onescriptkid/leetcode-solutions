/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {

  // 12 6 1 2 7     (12 - 1) * k
  // i    j   k 
  let max = 0
  for(let i = 0; i < nums.length; i++) {
    for(let j = i +1; j < nums.length; j++) {
      for(let k = j + 1; k < nums.length; k++) {
        let triplet = (nums[i] - nums[j]) * nums[k]
        if(triplet > max) {
          max = triplet
        }
      }
    }
  }

  return max

};