/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  nums.sort((a, b) => {
    if(a > b) {
      return -1
    } else {
      return 1
    }
  }) 
  // console.log(nums)

  let negs = 0
  for(let i = nums.length - 1; i >= 0; i--) {
    if(nums[i] < 0 && k !== 0) {
      nums[i] = -nums[i]
      k--
    }
  }
  // console.log(nums)

  if(k % 2 === 0) {
    let sum = 0;
    nums.forEach(v => sum+=v)
    return sum
  }

  // nums.sort((a > b) => {
  //   if(a > b) {
  //     return 1
  //   }
  //   return -1
  // })
  
  // nums.
  let min;
  let index;
  for(let i = 0; i < nums.length; i++) {
    let num =nums[i]
    if(min === undefined) {
      min = num
      index = i
    } else if( num < min) {
      min = num
      index = i
    }
  }
  nums[index] = -nums[index]

  let sum = 0
  nums.forEach(v => sum+=v)
  return sum
};