/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {

  // freq list
  // {1:1, 2: 1: 3: 2}, [1,2,3,3] === 4
  let freq = {}
  for(let i = 0; i < nums.length; i++) {
    // 3 === 4
    // 1 2 3
    if(i !== nums.length - 1) {
      freq[i+1] = 1
    } else {
      freq[i] = 2
    }
  }
  // console.log('frq', freq)


  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if(freq[num] === undefined) {
      return false
    } else if(freq[num] === 0) {
      return false
    }
    freq[num]--
  }
  return true
};