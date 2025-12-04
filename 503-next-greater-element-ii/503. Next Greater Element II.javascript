/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  // 0 1 2 3 4

  // 1 2 3 4 3   
  // 2 3 4 - 4

  // 1 2 3 4 3  1 2 3 4 3   
  // i
  
  // 1 2 3 4 3  [], {}
  // i
  // 1 2 3 4 3  [0], {}
  // i
  
  // 1 2 3 4 3  [0], {}
  //   i
  // 1 2 3 4 3  [1], {0:1}
  //   i


  // 1 2 3 4 3  [ 3(4) ], {...}
  //         i
  // 1 2 3 4 3  [ 3(4), 4:(3) ], {...}
  //         i
  let out = new Array(nums.length).fill(-1)
  let stack = []
  for(let i = 0; i < nums.length*2; i++) {
    let ci = i % nums.length
    // console.log('i', i, 's', stack, 'hash', hash)
    while(stack.length > 0 && nums[stack[stack.length-1]] <  nums[ci] ) {
      let index = stack.pop()
      out[index] = nums[ci]
    }
    if(i < nums.length) stack.push(ci)
  }

  // let out = []
  // for(let i = 0; i < nums.length; i++) {
  //   if(hash[i] === undefined) {
  //     out.push(-1)
  //   } else {
  //     out.push(nums[hash[i]])
  //   }
  // }

  return out

};