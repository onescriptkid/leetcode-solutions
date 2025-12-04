/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let nsr = [] 
  let nsl = []
  let stack = []
  for(let i = 0; i < heights.length; i++) {
    let h = heights[i]
    while(stack.length > 0 && heights[stack[stack.length -1]] > h) {
      let index = stack.pop()
      nsr[index] = i
    }
    stack.push(i)
  }
  while(stack.length > 0) {
    let index = stack.pop()
    nsr[index] = heights.length
  }

  for(let i = heights.length-1; i >= 0; i--) {
    let h = heights[i]
    while(stack.length > 0 && heights[stack[stack.length -1]] > h) {
      let index = stack.pop()
      nsl[index] = i
    }
    stack.push(i)
  }

  while(stack.length > 0) {
    let index = stack.pop()
    nsl[index] = -1
  }

  let max = 0
  for(let i =0; i < heights.length; i++) {
    let h = heights[i]
    let r = nsr[i]
    let l = nsl[i]
    let w = r - l -1
    max = Math.max(max, w*h)
  }
  return max
};