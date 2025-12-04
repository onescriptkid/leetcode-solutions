/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
  // 1 2 8 2 7
  //   p c n
  
  // 1 2 8 5 7
  //   p c n
  let count = 0
  let j = 0
  for(let i = 0; i < nums.length; i++) {
    j = i
    let prev = nums[i-1] || -1
    let num = nums[i]
    let next = nums[i+1] || 1001
    console.log('i', i, 'num', num, 'prv', prev)

    if(prev >= num) {
      if(next <= num) {
        return false
      }
      break
    }
  }   
  if(j === nums.length) {
    console.log('j', j, nums.length)
    return false
  } 

  let prev = -1
  for(let i = 0; i < nums.length; i++) {
    console.log('  i', i, 'num', nums[i], 'prv', prev)
    if(i === j-1) continue
    if(nums[i] <= prev) return false
    prev = nums[i]
  }
  return true
};