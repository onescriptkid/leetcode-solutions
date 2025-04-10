/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // numbers [2, 7, 11,15]   
  //          l
  //                   r
  //
  //  2  7 11 15
  //  l       r   17

  let l = 0
  let r = numbers.length - 1
  let out = []
  while(l < r) {
    let sum = numbers[l] + numbers[r]

    if(sum === target) {
      return [l+1, r+1]
    }
    if(sum > target) {
      r--
    }
    if(sum < target) {
      l++
    }
  }
};