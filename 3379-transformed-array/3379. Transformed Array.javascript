/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {

  // 0 1 2 3 4
  // 2 3 1 4 5   
  // 2   x
  //   3     y
  let out = nums.map(v => 0)

  for (let i = 0; i < nums.length; i++) {
    // console.log(i, nums, out)

    let num = nums[i]
    if(num === 0) {
      out[i] = 0
    }

    if(num > 0) {
      let index = (i + num) % nums.length
      out[i] = nums[index]
    }
    if(num < 0) {
      // 0 1 2 3 4 5
      //    -5 x    
      //    -2 x    
      //    -7
      //
      let abs = Math.abs(num% nums.length)
      let mod = num % nums.length
      // 0 1 2 3 4 5
      //    -2 x    
      if( (i - abs) >= 0 ) {
        out[i] = nums[i - abs]
      // 0 1 2 3 4 5
      //    -4 x    
      } else {
        let index = nums.length - (abs - i)
        // console.log('  index', index, 'abs', abs)
        out[i] = nums[index]
      }
    }
  }
  return out
};