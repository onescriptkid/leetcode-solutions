/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  // 4 2  3   => Oscillate on smallest index
  // 4 -2 3   => Negate until there's 1 index left. Then oscillate
  // 4 -2 0   => 

  nums = nums.sort((a,b) => a > b ? 1 : -1)

  let pos = []
  let neg = []
  let noNegs = true
  let hasZero = false
  for(let num of nums) {
    if(num === 0) {
      hasZero = true
    }
    if(num < 0) {
      noNegs = false
      neg.push(num)
    }
    if(num > 0) {
      pos.push(num)
    }
  }

  // 4 2 3
  // 4 2 3 0
  if(noNegs) {
    let sum = 0
    for(let i = 0; i < nums.length; i++) {
      let num = nums[i]
      if(k % 2 === 1 && i === 0) {
        num = -num
      }
      sum+=num
    }
    return sum
  }

  if (hasZero) {
    let sum = 0
    // -4 -2 -3 0
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i]
      if(num < 0 && i < k) {
        num = -num
      }
      sum+=num
    }
    return sum
  }
  // -4 -3 -2 1 2 3 4   k=2
  if(k < neg.length) {
    let sum = 0
    for(let i = 0; i < nums.length; i++) {
      let num = nums[i]
      if(i < k) {
        num = -num
      }
      sum+=num
    }
    return sum
  }
  // -4 -3 -2 1 2 3 4   k=7
  // [ -8, -5, -5, -3, -2, 3 ] extra = 1, k = 6
  //

  let sum = 0
  let extra = k - neg.length
  // console.log('nums', nums)
  // console.log('neg', neg)
  // console.log('extra', extra)
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (num < 0) {
      num = -num
    } else if(extra % 2 === 1 && i === neg.length) {
        // num = -num
      let prev = nums[i-1]
      // console.log('prev', prev)
      // console.log('num ', num) 
      let absprev = Math.abs(prev)
      if(absprev < num) {
        num = num + 2 * prev
      } else {
        num = -num
      }
    }
    sum += num
  }
  if(k > nums.length && extra % 2 === 1) {
    sum+=2 *nums[nums.length - 1]
  }
  return sum



};