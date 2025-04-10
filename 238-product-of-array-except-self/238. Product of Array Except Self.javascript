/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // 1 2 3 4   => [2*3*4, 1*3*4,1*2*4, 1*2*3]
  // 1 1 0 3 3 => [0, 0, 9, 0, 0]
  
  // 1  2  3  4   => [2*3*4, 1*3*4,1*2*4, 1*2*3]
  // 1  2  6  24
  // 24 24 12 4

   const output = Array(nums.length).fill(1);

    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] *= left;
        left *= nums[i];
    }

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= right;
        right *= nums[i];
    }

    return output;   



  // hasZero 


};