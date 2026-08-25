/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 0 1 2 3 4 5 6 7 8
  // 1 8 6 2 5 4 8 3 7   
  // l               r

  let max = 0

  let l = 0
  let r = height.length - 1
  while(l < r) {
    let w = r - l
    let h = Math.min(height[l], height[r])
    let area = w * h
    max = Math.max(max, area)

    if(height[l] < height[r]) {
      l++
    } else {
      r-- 
    }
  }
  return max
};