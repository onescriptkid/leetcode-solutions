/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
  // 0 1 2 3
  // 5 1 4 1     id = 2, vd = 4
  // x     y

  // 
  for(let i = 0; i < nums.length; i++) {
    for(let j = i; j < nums.length; j++) {
      let id = Math.abs(i - j)
      let vd = Math.abs(nums[i] - nums[j])
      if(id >= indexDifference && vd >= valueDifference) {
        return [i, j]
      }
    }
  }
  return [-1,-1]

};