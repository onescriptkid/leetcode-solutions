/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
  let averageSet = new Set()

  nums.sort((a,b) => a > b ? 1 : -1)

  let i = 0
  while(i < nums.length >> 1) {
    let min = nums[i]
    let max = nums[nums.length - 1 - i]
    let avg = (max + min) / 2
    averageSet.add(avg)
    i++
  }
  // console.log(averageSet)
  return averageSet.size
};