/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  //
  // 73 74 75 71 69 72  [], {}
  
  // 73 74 75 71 69 72     [73(0)], {0: 1}
  // 73 74 75 71 69 72     [74(1)], {0: 1, 1: 1}

  // 73 74 75 71 69 72 76  [75(2)], {0: 1, 1: 1}
  // 73 74 75 71 69 72 76  [75(2), 72(5), 76()], {0: 1, 1: 1, ..., 2: 76(6) - 75(2)}


  let stack = []
  let map = {}
  for(let i = 0; i < temperatures.length; i++) {

    let t = temperatures[i]

    while(stack.length > 0 && temperatures[stack.at(-1)] < t) {
      let si = stack.pop()
      let diff = i - si
      map[si] = diff
    }
    stack.push(i)
  }

  let out = []
  for(let i = 0; i < temperatures.length; i++) {
    let val = map[i] ?? 0
    out.push(val)
  }
  return out
};