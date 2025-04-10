/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {

  let sum = 0 
  // let maxsum = 0
  // let maxcount = 0 ;
  let count = 0 ;
  let set = new Set()
  let flag = false
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    set.add(num)
    if(i === 0) {
      sum+=num
      count++
    } else if((nums[i-1] +1) ===nums[i] && flag === false) {
      sum+=num
      count++
    } else {
      flag = true
    }
    // console.log(num, sum, flag)
  }

  let i = sum
  while(set.has(i)) {
    i++
  }
  return i
};