/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {

  // nums[2 * 1] = nums[1]
  // nums[2] = 1
  // nums[2 * 1 + 1] = nums[1] + nums[1 + 1]
  // nums[3] = 1 + nums[2] 

  let arr = new Array(n + 1)

  if(arr.length > 0) {
    arr[0] = 0
  }
  if(arr.length > 1) {
    arr[1] = 1
  }
  // 4 => n >> 1 =>  2

  for(let i = 2; i < n + 1; i++) {
    if(i % 2 === 0) {
      arr[i] = arr[i / 2]
    } else {
      // 3 = 2 * i + 1
      // 3 = 2 * 1 + 1
      // i = (3 - 1) / 2
      // arr[7] = arr[i] + arr[i+1]  7 = 2 * i + 1 => i = 3
      // arr[7] = arr[3] + arr[4]
      arr[i] = arr[(i - 1) / 2] + arr[(i + 1) / 2]
    }
  }
  // for (let i = 1; i < n >> 1; i++) {
  //   arr[2*i] = arr[i]
  //   arr[2 * i + 1] = arr[i] + arr[i+1]
  // }

  console.log(arr)

  let max;
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if(max === undefined) {
      max = num
    } else if(max < num) {
      max = num
    }
  }
  return max
};