/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

  // 
  let count = 0
  let maj
  for(let num of nums) {

    if(count === 0) {
      maj = num
      count++
    } else if(maj === num) {
      count++
    } else {
      count--
    }
  }
  return maj

};