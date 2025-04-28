/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {

  // 0 1 2 3
  // 4 2 5 7 
  //   i
  //     e 
  //   o
  
  // 0 1 2 3 4 5 6 7
  // 1 1 1 1 0 0 0 0
  // i
  // e 
  //   o

  // 0 1 0 1
  // 4 2 5 7
  //   i
  //     j

  for(let i = 0; i < nums.length; i++) {
    // console.log('i', i, 'nums', nums)
    let num = nums[i]
    if(num %2 === 0 && i%2===1 ) {

      let j = i +1
      while(j < nums.length) {
        if(nums[j] % 2 === 1 && j %2 === 0) {
          break;
        }
        j++
      }

      let tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
    }
    if(nums[i] %2 === 1 && i % 2 === 0) {
      let j = i +1

      while(j < nums.length) {
        if(nums[j] % 2 === 0 && j % 2 === 1) break;
        j++
      }

      let tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
    }
  }



  return nums
};