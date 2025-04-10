/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function(nums) {
  // 0 1 2 3 4

  // 2 3 4 3 4
  //   i     

  // i
  // j
  // j j

  let count = 0
  let max = 0
  for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++) {
      let start = nums[j]
      // console.log('i j', i, j, '  sub', nums.slice(i, j+1))

      if(j % 2 === i % 2) {
        if(nums[i] !==nums[j]) {
          break;
        }
      } else {
        if(nums[i] !== (nums[j]-1)) {
          break;
        }
      }

      // console.log('  alt', nums.slice(i, j+1) )

      let len = j - i + 1
      if(len === 1) continue
      if(len > max) {
        max = len
      }

    }
  }
  if(max === 0) max = -1

  return max
};