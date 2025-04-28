/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // 2 2 1 1 3   1 2 2 
  // 1 2 1 0     1

  // 2 2 2 2 3 3 1

  let count = 1
  let majority = nums[0]
  for(let i = 1; i < nums.length; i++) {
    let num = nums[i]
    // console.log('num', num, 'count', count, 'm', majority)

    if(count === 0) {
      majority = num
    }
    if(num === majority) {
      count++
    } else {
      count--
    }

    // freq[num] = (freq[num] || 0) + 1
    // if(freq[num] > (nums.length/2) ) {
    //   return num
    // }

  }
  return majority
};