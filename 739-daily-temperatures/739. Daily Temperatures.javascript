/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  //  0  1  2  3  4
  // [73 74 75 71 69 72 67 73]       [[73, 0]]  {}
  //  ^
  
  //  0  1  2  3  4
  // [73 74 75 71 69 72 67 73]       [[73, 0]]  {0: 1}
  //     ^

  // Made 2 optimizations to go from 115ms -> 18ms
  // - Created out array ahead of time
  // - Only stored the index in the stack.

  let stack = []
  let out2 = new Array(temperatures.length).fill(0)
  for(let i = 0; i < temperatures.length; i++) {
    let t = temperatures[i]

    while(stack.length > 0) {
      let topi = stack[stack.length - 1]
      let topt = temperatures[topi]
      if(t > topt) {
        stack.pop()
        out2[topi] = i - topi
      } else {
        break;
      }
    }
    stack.push(i)
  }
  return out2

};