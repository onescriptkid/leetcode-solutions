/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
  let closest

  for(let num of nums) {
    if(closest === undefined) {
      closest = num
    } else if(Math.abs(closest) === Math.abs(num)  && num > 0) {
      closest = num
    } else if(Math.abs(closest) > Math.abs(num)) {
      closest = num
    }
  }
  return closest
};