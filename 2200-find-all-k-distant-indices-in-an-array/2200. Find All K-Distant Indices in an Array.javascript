/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
  // 3 4 9 1 3 9 5
  // 0 1 2 3 4 5 6
  //     i     i

  // {2, 5}
  let set = new Set()
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(num === key) {

      let start = i - k < 0 ? 0 : i - k
      let end = i + k >= nums.length -1 ? nums.length -1 : i + k
      // console.log(i, start, end)
      for(let j = start; j <= end; j++) {
        set.add(j)
      }
    }
  }
  return [...set]
};
