/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

  let nsr = []   
  let stack = []

  for(let i = 0; i < heights.length; i++) {
    let h = heights[i]
    while(stack.length > 0 && heights[stack.at(-1)] > h) {
      nsr[stack.pop()] = i
    }
    stack.push(i)
  }
  while(stack.length > 0) {
    nsr[stack.pop()] = heights.length
  }

  let nsl = []
  for(let i = heights.length - 1; i >= 0; i--) {
    let h = heights[i]
    while(stack.length > 0 && heights[stack.at(-1)] > h) {
      nsl[stack.pop()] = i
    }
    stack.push(i)
  }
  while(stack.length > 0) {
    nsl[stack.pop()] = -1
  }

  let max = 0
  for(let i = 0; i < heights.length; i++) {
    let l = nsl[i]
    let r = nsr[i]
    let h = heights[i]
    let w = r - l - 1
    max = Math.max(max, w*h)
  }
  return max

};