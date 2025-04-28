/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 2 7 11 15    => 9

  // 9-2, 9-7, 9-11, 9-15
  // {7:0, 2:1, -2:2, -6:3}

  let partials = {}
  for(let i = 0; i <nums.length; i++) {
    let num = nums[i]
    if(partials[num] !== undefined) {
      return [i, partials[num]]
    }

    let diff = target - nums[i]
    partials[diff] = i
  }

  // for(let i = 0; i < nums.length; i++) {
  //   let num = nums[i]

  //   if(partials[num] !== undefined && partials[num] !== i) {
  //     return [i, partials[num]]
  //   }
  // }

};