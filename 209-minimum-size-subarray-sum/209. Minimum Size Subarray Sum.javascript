/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  // 2 3 1 2 4 3   t=7
  // - - -         sum=6
  // - - - -       sum=8
  let l = 0   
  let r = 0
  let sum = 0
  let min = 0

  while(r < nums.length) {
    let nr = nums[r]
    r++
    sum+=nr

    while(l < r && sum >= target) {

      let len = r - l
      if(min === 0 || len < min) {
        min = len
      }

      let nl = nums[l]
      l++
      sum-=nl



    }
  }

  return min
};