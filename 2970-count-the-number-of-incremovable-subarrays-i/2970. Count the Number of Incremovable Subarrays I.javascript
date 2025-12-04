/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function(nums) {

  // 1 2 3 4
  //   i
  // x     x  
  //     j

  let count = 0
  for(let i = 0; i < nums.length; i++) {
    for(let j = i; j < nums.length; j++) {
      // let arr = nums.slice(i, j+1)
      let arr = [...nums.slice(0, i), ...nums.slice(j+1)]
      // console.log('arr', arr)
      let isIncremovable = true
      let prev
      for(let num of arr) {
        if(prev !== undefined) {
          if(num <= prev) {
            isIncremovable = false
            break;
          }
        }
        prev = num
      }
      if(isIncremovable) {
        count++
      }

    }
  }
  return count
};