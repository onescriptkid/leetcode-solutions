/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {


  let target = []

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let ind = index[i]
    // console.log(target)

    if(target[ind] === undefined) {
      target[ind] = num
    } else {
      // [0 1 3 2]
      //  0 1 2 3
      //      i
      for (let j = target.length; j > ind; j--) {
        target[j] = target[j - 1]
      }
      target[ind] = num
    }
  }
  return target
};