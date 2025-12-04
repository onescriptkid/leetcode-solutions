/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {

  let count0 = 0
  let count1 = 0   

  let num0
  let num1

  for(let num of nums) {
    if(num0 === num) {
      count0++
    } else if(num1 === num) {
      count1++
    } else if(count0 === 0) {
      num0 = num
      count0++
    } else if(count1 === 0) {
      num1 = num
      count1++
    } else {
      count0--
      count1--
    }
  }

  count0 = 0
  count1 = 0

  for(let num of nums) {
    if(num === num0) count0++
    if(num === num1) count1++
  }
  let out = []
  if(count0 > nums.length / 3) out.push(num0)
  if(count1 > nums.length /3 && num0 !== num1) out.push(num1)
  return out
};