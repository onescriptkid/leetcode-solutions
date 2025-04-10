/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
  //n = nums.length / 2
  // let unique = 
  // let unique = nums.length / 2  + 1
  let repeated = nums.length/2 - 1

  let counts = {}
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(counts[num] === undefined) {
      counts[num] = 1
    } else {
      counts[num]++
    }
    if(counts[num] > repeated) {
      return num
    }
  } 
};