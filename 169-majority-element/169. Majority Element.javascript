/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

  let majority = nums.length /2

  let maj
  let count = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if(maj === undefined) {
      maj = num
      count++
    } else if(maj === num) {
      count++
      if(count > nums.length / 2) return maj
    } else {
      count--
      if(count === 0) {
        maj= num
        count= 1
      }
    }
  }

  return maj


};