/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {

  let max = 0
  let arr = []
  for(let i = 0; i < k; i++) {
    max+=nums[i]
  }
  // 1  12  -5  -6  50 3
  // 0  1   2   3   4  5
  // i                 i+k  


  // let arr = [1, 12, -5, -6, 50, 3] 6- 4
  let sum = max;
  for(let i = 0;i < nums.length - k; i++) {
    let start = nums[i]
    let end = nums[i+k]
    sum-=start;
    sum+=end;
    if(sum > max) {
      max = sum
    }
  }

  return max / k

};