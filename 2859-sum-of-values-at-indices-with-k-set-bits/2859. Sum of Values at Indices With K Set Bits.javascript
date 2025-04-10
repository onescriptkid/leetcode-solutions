/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {

  // 5 10 1 5 2
  //
  // 2 10
  // 5 101
  // 10 1010
  // 1        10
  // 0  01 10 11 100 
  // 0  1  2  3  4 

  function countSetBits(num) {
    
    let count = 0
    while(num > 0) {
      let digit = num % 2
      if(digit === 1) count++
      num = Math.floor(num / 2)
    }
    return count
  }

  let sum = 0
  for(let i =0; i < nums.length; i++) {
    let num = nums[i]
      // console.log('i', i, countSetBits(i))
    if(countSetBits(i) === k) {
      sum+=num
    }
  }
  return sum
};