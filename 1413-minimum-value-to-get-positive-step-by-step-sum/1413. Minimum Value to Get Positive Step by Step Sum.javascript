/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {

  // -3  2 -3  4  2
  // -3 -1 -4  0  2

  let min = undefined
  let step = 0
  for(let num of nums) {
    step+=num
    if(min === undefined) {
      min = step
    } else if(step < min) {
      min = step
    }
  }
  if(min < 0) {
    return -min + 1
  } else {
    return 1
  }

};