/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {

  nums = nums.sort((a,b) => a > b ? 1 : -1)   

  let i = 0
  let min = undefined
  while(i < nums.length >> 1) {
    let small = nums.shift()
    let large = nums.pop()
    let average = (small + large) / 2
    if(min ===  undefined) {
      min = average
    } else if(average < min) {
      min = average
    }
  }
  return min
};