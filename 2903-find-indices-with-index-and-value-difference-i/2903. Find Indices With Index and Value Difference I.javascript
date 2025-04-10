/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {

  // 5 1 4 1
  // i   j
  for(let i = 0; i < nums.length; i++) {
    let first = nums[i]
    for(let j = 0; j < nums.length; j++) {
      let second = nums[j]
      let id = Math.abs((i - j))
      let vd = Math.abs(first - second)
      if(id >= indexDifference && vd >= valueDifference){
        return [i, j]
      }
    }
  }
  return [-1, -1]
};