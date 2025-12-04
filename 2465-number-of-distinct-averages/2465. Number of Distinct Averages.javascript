/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {

  // 4 1 4 0 3 5
  // 0 1 3 4 4 5
  
  //   1 3 4 4     0 5
  //     3 4       1 4
  //               3 4
  nums.sort((a,b) => a > b ? 1 : -1)

  let set = new Set()
  for(let i = 0; i < nums.length >> 1; i++) {
    let lo = nums[i]
    let hi = nums[nums.length - 1 - i]

    let res = (hi + lo) / 2
    // console.log(lo, hi, res)
    set.add(res)
  }
  // console.log(set)
  return set.size
};