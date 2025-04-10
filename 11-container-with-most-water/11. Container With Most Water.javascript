/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

  // let max;
  //  0 1 2 3 4 5 6 => 6 Min(h0, h2) * length
  //  3 0 3 0 0 2 0 => 
  //  1 6

  // 3 * 2               Min(3, 3) * 2
  // 2 * 6               Min(3, 2) * 6

  // 1 6 7 0 0 9 6 1 1
  // 1 l         r

  // 1 8 6 2 5 4 8 3 7
  // l               r
  let map = {}
  let max = undefined
  let l = 0
  let r = height.length - 1
  while(l <= r) {
    let area = Math.min(height[l], height[r]) * (r - l)
    if(max === undefined) {
      max = area
    } else if(max < area) {
      max = area
    }

    if(height[l] < height[r]) {
      l++
    } else {
      r--
    }

  }
  return max


  

};