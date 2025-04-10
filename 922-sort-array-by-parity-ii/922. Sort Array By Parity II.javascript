/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  // 0 1 2 3 4 5 6 7

  // 5 5 6 6 7 7 8 8
  // i
  // 

  let i = 0;
  while(i < nums.length) {
    let num = nums[i]
    if(i % 2 !== num % 2) {
      // console.log(i, num)

      if(nums[i] % 2 === 0) {
        let j = i
        while(j < nums.length && nums[j] % 2 === 0) {
          j++
        }
        // console.log(i, j, 'even')
        let tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
      } else if(nums[i] % 2 === 1) {
        let j = i
        while(j < nums.length && nums[j] % 2 === 1) {
          j++
        }
        // console.log(i, j, 'odd')
        let tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
      }
    }
    i++
  }
  return nums

  // let e = 0
  // let o = 0
  // for(let i = 0; i < nums.length; i++) {
  //   let num = nums[i]
  //   if(num % 2 === 0) {

  //   } else {

  //   }
  // }
};