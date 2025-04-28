/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

  // 0 1 2 3 4 5 6 7 8
  // 1 8 6 2 5 4 8 3 7    Max(h) * w  1 * 8
  // l               r    
  
  // 0 1 2 3 4 5 6 7 8
  // 1 8 6 2 5 4 8 3 7    Max(h) * w  7 * 7
  //   l             r    

  let l = 0
  let r = height.length - 1
  let max = 0

  while(l < r) {
    let area = Math.min(height[l], height[r]) * (r - l)

    if(area > max) {
      max = area
    }

    if(height[l] <= height[r]) {
      l++
    } else {
      r--
    }
  }
  return max


    
};